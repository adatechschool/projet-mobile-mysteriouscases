const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scoresController");

router.get("/getAllScores", scoresController.getAllScores);
router.get("/getQuestScores", scoresController.getQuestScores);
router.post("/postScore", scoresController.postScore);
router.put("/updateScore", scoresController.postScore);

module.exports = router;
