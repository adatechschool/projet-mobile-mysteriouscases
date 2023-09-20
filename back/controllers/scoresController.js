const connectDB = require("../routes/db-config/db");

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
  const questId = req.params.questId;
  const sql =
    "SELECT * FROM scores WHERE quest = ? ORDER BY CAST(score AS TIME) ASC"; // Ou "ORDER BY score ASC" si score n'est pas converti en time
  connectDB.query(sql, [questId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

//Créer un nouveau score
exports.postScore = (req, res) => {
  const user = req.body.user;
  const quest = req.body.quest;
  const start = req.body.start;
  const finish = req.body.finish;
  if (!user || !quest || !start || !finish) {
    return res.status(400).json({ error: "Toutes les valeurs sont requises" });
  }

  // Calcul de la durée du score en secondes
  const durationInSeconds = (finish - start) / 1000;

  const sql =
    "INSERT INTO scores (user, quest, start, finish) VALUES (?,?,?,?,?)";
  connectDB.query(sql, [user, quest, durationInSeconds, finish], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: err.message });
    } else {
      res.send(results);
    }
  });
};
