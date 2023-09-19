const express = require("express");
const router = express.Router();
const stepsController = require("../controllers/stepsController");

router.get("/getAllSteps", stepsController.getAllSteps);
router.get("/getSingleQuest/:questId/:step", stepsController.getSingleStep);

module.exports = router;
