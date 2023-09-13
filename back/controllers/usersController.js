const connectDB = require("../routes/db-config/db");
// const mysql = require("mysql2");

exports.getAllUsers = (req, res) => {
  const sql = "SELECT * FROM users";
  connectDB.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.AddUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  connectDB.query(sql, [username, email, password], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error creating user");
    } else {
      res.send("User created successfully");
    }
  });
};
