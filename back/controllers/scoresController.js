const connectDB = require("../routes/db-config/db");

//Afficher tous les scores
exports.getAllScores = (req, res) => {
  const sql = "SELECT * FROM scores";
  connectDB.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

//Afficher tous les scores d'une quête particulière
exports.getQuestScores = (req, res) => {
  const questId = req.params.questId;
  const sql =
    "SELECT * FROM scores WHERE quest = ? ORDER BY CAST(score AS TIME) ASC"; // Ou "ORDER BY score ASC" si score n'est pas converti en time
  connectDB.query(sql, [questId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

//Créer un nouveau score
exports.postScore = (req, res) => {
  const user = req.body.user;
  const quest = req.body.quest;
  const start = req.body.start;
  const finish = req.body.finish;
  if (!user || !quest || !start || !finish) {
    return res.status(400).json({ error: "Toutes les valeurs sont requises" });
  }

  // Calcul de la durée du score en secondes
  const durationInSeconds = (finish - start) / 1000;

  // Convertir la durée en format "hh:mm:ss"
  const durationFormatted = secToTime(durationInSeconds);

  const sql =
    "INSERT INTO scores (user, quest, start, finish) VALUES (?,?,?,?,?)";
  connectDB.query(sql, [user, quest, durationInSeconds, finish], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send({ error: err.message });
    } else {
      res.send(results);
    }
  });
};

// Fonction pour convertir les secondes en format "hh:mm:ss"
function secToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  return `${hours}:${minutes}:${sec}`;
}

// AUTRE VERSION QUI ME SEMBLE PLUS JUSTE POUR DEUX BOUTONS :

// // Créer un nouveau score
// exports.postScore = (req, res) => {
//   const user = req.body.user;
//   const quest = req.body.quest;
//   const start = Date.now(); // Date.now() pour l'heure de début

//   if (!user || !quest) {
//     return res.status(400).json({ error: "Toutes les valeurs sont requises" });
//   }

//   const sql = "INSERT INTO scores (user, quest, start) VALUES (?,?,?)";
//   connectDB.query(
//     sql,
//     [user, quest, start],
//     (err, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send({ error: err.message });
//       } else {
//         res.send("Quête démarrée avec succès !");
//       }
//     }
//   );
// };

// // Terminer la quête et enregistrer l'heure de fin, ainsi que la durée de la quête
// exports.updateScore = (req, res) => {
//   const user = req.body.user;
//   const quest = req.body.quest;
//   const finish = Date.now(); // Date.now() pour l'heure de fin

//   if (!user || !quest) {
//     return res.status(400).json({ error: "Toutes les valeurs sont requises"  });
//   }

//   // Calcul de la durée de la quête en secondes
//   const durationInSeconds = (finish - req.body.start) / 1000;

// // Convertir la durée en format "hh:mm:ss"
// const durationFormatted = secToTime(durationInSeconds);

//   // Mise à jour du score avec l'heure de fin et la durée de la quête
//   const sql = "UPDATE scores SET finish = ?, duration = ? WHERE user = ? AND quest = ?";
//   connectDB.query(
//     sql,
//     [finish, durationInSeconds, user, quest],
//     (err, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send({ error: err.message });
//       } else {
//         res.send("Quête terminée avec succès !");
//       }
//     }
//   );
// };
// // Fonction pour convertir les secondes en format "hh:mm:ss"
// function secToTime(seconds) {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const sec = seconds % 60;
//   return `${hours}:${minutes}:${sec}`;
// }
