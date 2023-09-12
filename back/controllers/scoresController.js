const connectDB = require("../routes/db-config/db")

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
