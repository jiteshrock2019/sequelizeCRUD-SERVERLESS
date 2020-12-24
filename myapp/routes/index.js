var express = require("express");
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const shopController = require("../controllers/shopController");
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

// Product Router
router.post("/product", productController.createProduct);
router.get("/product/:id", productController.getProduct);
router.put("/product/:id", productController.updateProduct);
router.get("/products", productController.getProducts);

// Shop Router
router.get("/shops", shopController.getShops);
router.post("/shop", shopController.createShop);

module.exports = router;
