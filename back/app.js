//Création du serveur backend
const express = require("express");
const connectDB = require("./routes/db-config/db");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const connection = require("./routes/db-config/db");
app.use(bodyParser.json());

connectDB;

app.get("/", (req, res) => {
  res.send("Coucou je suis le backend");
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (error, data) => {
    if (error) {
      return;
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`le back tourne sur le serveur ${port}`);
});

app.post("/user", (req, res) => {
  res.s;
});
