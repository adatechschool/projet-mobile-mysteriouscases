//Création du serveur backend
const express = require("express");
const connectDB = require("./routes/db-config/db");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const usersRoutes = require("./routes/usersRoutes")
const questsRoutes = require("./routes/questsRoutes")
const scoresRoutes = require("./routes/scoresRoutes")
const stepsRoutes = require("./routes/stepsRoutes")

connectDB;

app.get("/", (req, res) => {
  res.send("Coucou je suis le backend");
});

app.listen(port, () => {
  console.log(`le back tourne sur le serveur ${port}`);
});

app.use("/users", usersRoutes);
app.use("/quests", questsRoutes);
app.use("/scores", scoresRoutes);
app.use("/steps", stepsRoutes);
