const express = require("express");
const router = express.Router();
const questsController = require("../controllers/questsController");

router.get("/getAllQuests", questsController.getAllQuests);

module.exports = router;
