const express = require("express");
const router = express.Router();
const stepsController = require("../controllers/stepsController");

router.get("/getAllSteps", stepsController.getAllSteps);

module.exports = router;
