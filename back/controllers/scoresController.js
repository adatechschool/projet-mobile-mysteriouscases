const connectDB = require("../routes/db-config/db")

//Afficher tous les scores
exports.getAllScores = (req, res) => {
  const sql = `SELECT
    scores.id AS scoreId,
    users.username AS user,
    quests.title AS quest,
    (TIMESTAMPDIFF(SECOND, FROM_UNIXTIME(scores.start / 1000), FROM_UNIXTIME(scores.finish / 1000))) AS timeInSeconds
  FROM scores
  INNER JOIN users ON scores.user = users.id
  INNER JOIN quests ON scores.quest = quests.id 
  ORDER BY timeInSeconds ASC
  `;
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

//Afficher tous les scores d'une quête (V2)
exports.getScoresByQuest = (req, res) => {
  const sql = `
  SELECT 
    scores.id AS scoreId,
    users.username AS username,
    quests.name AS questName,
    (TIMESTAMPDIFF(SECOND, FROM_UNIXTIME(scores.start / 1000), FROM_UNIXTIME(scores.finish / 1000))) AS timeInSeconds
  FROM scores
  INNER JOIN users ON scores.user_id = users.id
  INNER JOIN quests ON scores.quest_id = quests.id
  WHERE scores.quest_id = ?
`;

  const questId = req.params.questId; // Récupérez l'ID de la quête depuis les paramètres de l'URL

  connectDB.query(sql, [questId], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ error: err.message });
    } else {
      res.json(results);
    }
  });
};


// Créer un nouveau score
exports.postScore = (req, res) => {
  const user = req.body.user;
  const quest = req.body.quest;
  const start = req.body.start;

  if (!user || !quest) {
    return res.status(400).json({ error: "Toutes les valeurs sont requises" });
  }

  const sql = "INSERT INTO scores (user, quest, start) VALUES (?,?,?)";
  connectDB.query(
    sql,
    [user, quest, start],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
      } else {
        res.send("ok ça roule");
      }
    } 
  );
};

// Terminer la quête et enregistrer l'heure de fin, ainsi que la durée de la quête
exports.updateScore = (req, res) => {
  const user = req.body.user;
  const quest = req.body.quest;
  const finish = req.body.finish; // Date.now() pour l'heure de fin

  if (!user || !quest) {
    return res.status(400).json({ error: "Toutes les valeurs sont requises"  });
  }

  // Mise à jour du score avec l'heure de fin et la durée de la quête
  const sql = "UPDATE scores SET finish = ? WHERE user = ? AND quest = ?";
  connectDB.query(
    sql,
    [finish, user, quest],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: /*err.message*/ 'ça marche pas' });
      } else {
        res.send("Quête terminée avec succès, retrouvez le score sur la page ranking !");
      }
    }
  );
};