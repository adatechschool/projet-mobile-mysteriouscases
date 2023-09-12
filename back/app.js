//Création du serveur backend
const express = require("express");
const connectDB = require("./routes/db-config/db");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

connectDB;

app.get("/", (req, res) => {
  res.send("Coucou je suis le backend");
});

app.listen(port, () => {
  console.log(`le back tourne sur le serveur ${port}`);
});

// app.post("/user", (req, res) => {
//   res.send("Hello World");
// });
// const usersRoutes = require("./routes/usersRoutes");
// app.use("/", usersRoutes);







// Importez le contrôleur des utilisateurs
const usersController = require("./controllers/usersController");

// ...

// Utilisez la route /users pour appeler la fonction getAllUsers du contrôleur
app.get("/users", usersController.getAllUsers);

// ...

