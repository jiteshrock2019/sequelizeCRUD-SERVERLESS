var express = require("express");
const userController = require("../controllers/userController");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// User Router
router.post("/user", userController.createUser);
router.get("/user/:id", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.get("/users", userController.getUsers);

module.exports = router;
