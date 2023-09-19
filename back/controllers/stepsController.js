const connectDB = require("../routes/db-config/db")

//Affiche toutes les étapes
exports.getAllSteps = (req, res) => {
  const sql = "SELECT * FROM steps";
  connectDB.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

//Affiche une étape en fonction de la quête et du n° d'étape
exports.getSingleStep = (req, res) => {

  const sql = "SELECT * FROM steps WHERE quest = ? AND step_number = ?";
  const questId = req.params.questId;
  const step = req.params.step

  connectDB.query(sql, [questId, step], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};
