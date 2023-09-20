const connectDB = require("../routes/db-config/db")

//Afficher tous les scores
exports.getAllScores = (req, res) => {
  const sql = "SELECT * FROM scores";
  connectDB.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

//Afficher tous les scores d'une quête particulière
exports.getQuestScores = (req, res) => {
  const sql = "SELECT * FROM scores WHERE quest = ? ORDER BY CAST(score AS TIME) ASC"; // Ou "ORDER BY score ASC" si score n'est pas converti en time
  connectDB.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};


// Créer un nouveau score
exports.postScore = (req, res) => {
  const user = req.body.user;
  const quest = req.body.quest;
  const start = Date.now(); // Date.now() pour l'heure de début

  if (!user || !quest) {
    return res.status(400).json({ error: "Toutes les valeurs sont requises" });
  }

  const sql = "INSERT INTO scores (user, quest, start) VALUES (?,?,?)";
  connectDB.query(
    sql,
    [user, quest, start],
    (err, results) => {
      if (error) {
        console.error(error);
        res.status(500).send({ error: err.message });
      } else {
        res.send("Quête démarrée avec succès !");
      }
    }
  );
};

// Terminer la quête et enregistrer l'heure de fin, ainsi que la durée de la quête
exports.updateScore = (req, res) => {
  const user = req.body.user;
  const quest = req.body.quest;
  const finish = Date.now(); // Date.now() pour l'heure de fin

  if (!user || !quest) {
    return res.status(400).json({ error: "Toutes les valeurs sont requises"  });
  }

  // Mise à jour du score avec l'heure de fin et la durée de la quête
  const sql = "UPDATE scores SET finish = ? WHERE user = ? AND quest = ?";
  connectDB.query(
    sql,
    [finish, user, quest],
    (err, res) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
      } else {
        res.send("Quête terminée avec succès !");
      }
    }
  );
};