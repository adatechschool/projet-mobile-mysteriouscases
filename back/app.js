//Création du serveur backend
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./routes/db-config/db");
const usersRoutes = require("./routes/usersRoutes");
const questsRoutes = require("./routes/questsRoutes");
const scoresRoutes = require("./routes/scoresRoutes");
const stepsRoutes = require("./routes/stepsRoutes");
const app = express();
const port = 3000;

app.use(cors({origin:"https://mysteryquest.vercel.app"}));

app.use(bodyParser.json());

//Autorisations cross origin pour accepter les requêtes
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");
  
  next();
});

//Mise en place du serveur
app.get("/", (req, res) => {
  res.send("Coucou je suis le backend");
});
app.listen(port, () => {
  console.log(`le back tourne sur le serveur ${port}`);
});

//Connexion à la base de données
connectDB;

app.use("/users", usersRoutes);
app.use("/quests", questsRoutes);
app.use("/scores", scoresRoutes);
app.use("/steps", stepsRoutes);
