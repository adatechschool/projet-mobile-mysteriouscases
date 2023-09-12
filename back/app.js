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

app.listen(port, () => {
  console.log(`le back tourne sur le serveur ${port}`);
});

app.post("/user", (req, res) => {
  res.s;
});
const usersRoutes = require("./routes/usersRoutes");
app.use("/api/users", usersRoutes);
