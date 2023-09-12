//Création du serveur backend
const express = require("express");
const connectDB = require("./routes/db-config/db");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const usersRoutes = require("./routes/usersRoutes")

connectDB;

app.get("/", (req, res) => {
  res.send("Coucou je suis le backend");
});

app.listen(port, () => {
  console.log(`le back tourne sur le serveur ${port}`);
});

app.use("/", usersRoutes);
