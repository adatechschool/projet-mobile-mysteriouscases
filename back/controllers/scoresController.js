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

//Créer un nouveau score
exports.postScore = (req, res) => {
  const user = req.body.user
  const quest = req.body.quest
  const score = req.body.score
  const date = req.body.date
    if (!user || !quest || !score || !date) {
      return res.status(400).json({ error: "Toutes les valeurs sont requises" });
    }
  const sql = "INSERT INTO scores (user, quest, score, date) VALUES (?,?,?,?)";
  connectDB.query(sql, [user, quest, score, date], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: err.message });
    } else {
      res.send(results);
    }
  });
};
