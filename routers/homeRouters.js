const { Router } = require("express");
const express = require("express");

//Routers
const authRoutes = require("./authRouters");

//Controllers
const homeController = require("../controllers/homeController");

//Declaration
const app = express();
const router = Router();

// Routes
router.get("/", homeController.homeView);
router.get("/home", homeController.homeView);
router.get("/dokan", homeController.homeView);
router.get("/about", homeController.aboutView);

//404
app.use((req, res) => {
  res.status(404).send("No Such Route Exits");
});
module.exports = router;
