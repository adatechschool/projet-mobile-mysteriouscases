const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUsers);
router.post("/users", usersController.addUser);
// router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
