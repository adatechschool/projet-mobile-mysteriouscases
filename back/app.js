//Création du serveur backend
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Coucou je suis le backend");
});

app.listen(port, () => {
  console.log(`le back tourne sur le serveur ${port}`);
});

//Connexion à la Base de données
const mysql = require('mysql2');

require('dotenv').config(); // Charge les variables d'environnement depuis .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST,  //DB_HOST, DB_USER, etc = ce qui a été mis dans .env
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

//Vérification de la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
    throw err;
  }
  console.log('Connecté à la base de données MySQL. Trop forte Camille !');
});
