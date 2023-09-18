const connectDB = require("../routes/db-config/db");

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

exports.getUsers = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM users WHERE id = ?";
  connectDB.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.addUser = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
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

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE * FROM users WHERE id = ?";
  connectDB.query(sql, [id], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error deleting user");
    } else {
      res.send("User deleted successfully");
    }
  });
};
