const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUsers);
router.post("/users", usersController.addUser);
<<<<<<< HEAD
// router.delete("/users/:id", usersController.deleteUser);
=======
router.delete("/users/:id", usersController.deleteUser);
>>>>>>> 61bc65a (get user ID)

module.exports = router;
