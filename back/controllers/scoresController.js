// const connectDB = require("../routes/db-config/db");
// // const mysql = require("mysql2");

// exports.insertUserScore = (req, res) => {
//   const sql = "INSERT INTO scores (score) VALUES (?),";
//   connectDB.query(sql, (err, results) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(results);
//     }
//   });
// };
