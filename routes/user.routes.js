var express = require("express");
var router = express.Router();
const Users = require("../controllers/user.controller.js");

// Create a new User
router.post("/", Users.create);

// Retrieve all Users
router.get("/", Users.findAll);

// Retrieve a single User with UserId
router.get("/:userId", Users.findOne);

// Update a User with UserId
router.put("/:userId", Users.update);

// Delete a User with UserId
router.delete("/:userId", Users.delete);

module.exports = router;
