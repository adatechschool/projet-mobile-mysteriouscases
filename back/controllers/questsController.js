const connectDB = require("../routes/db-config/db")

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
