const { Router } = require("express");
const express = require("express");

//Routers

//controllers
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");

//Declaration
const app = express();
const router = Router();

//Routes
router.get("/product", productController.allProductView);
router.post("/product", productController.getProduct);

router.get("/product/:id", productController.productView);
router.post("/product/:id", cartController.addToCart);

//404
app.use((req, res) => {
  res.status(404).send("No Such Route Exits");
});
module.exports = router;
