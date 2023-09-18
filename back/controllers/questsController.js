const connectDB = require("../routes/db-config/db")


//Afficher toutes les quêtes
exports.getAllQuests = (req, res) => {
  const sql = "SELECT * FROM quests";
  connectDB.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

//Afficher la quête sélectionnée en fonction de l'id
exports.getSingleQuest = (req, res) => {
  const questId = req.params.id
  const sql = "SELECT * FROM quests WHERE id = ?";

  connectDB.query(sql, [questId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};
