const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scoresController");

router.get("/getAllScores", scoresController.getAllScores);
router.get("/getQuestScores", scoresController.getQuestScores);
router.get("/getScoresByQuest", scoresController.getScoresByQuest);
router.post("/postScore", scoresController.postScore);
router.put("/updateScore", scoresController.updateScore);

module.exports = router;
