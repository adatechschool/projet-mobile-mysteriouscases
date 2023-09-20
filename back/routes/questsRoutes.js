const express = require("express");
const router = express.Router();
const questsController = require("../controllers/questsController");

router.get("/getAllQuests", questsController.getAllQuests);

router.get("/getSingleQuest/:id", questsController.getSingleQuest);

module.exports = router;
