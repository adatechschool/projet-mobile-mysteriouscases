const express = require("express");
const router = express.Router();
const questsController = require("../controllers/questsController");

router.get("/getAllQuests", questsController.getAllQuests);

router.get("/getSingleQuest", questsController.getSingleQuest);

module.exports = router;
