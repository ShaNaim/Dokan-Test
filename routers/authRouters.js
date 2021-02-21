const { Router } = require("express");
const express = require("express");
//Routers

const authController = require("../controllers/authController");
//controllers

//Declaration
const app = express();
const router = Router();
//Routes
router.get("/signup", authController.signupView);
router.post("/signup", authController.addUser);

router.get("/login", authController.loginView);
router.post("/login", authController.authincateUser);

//404
app.use((req, res) => {
  res.status(404).send("No Such Route Exits");
});
module.exports = router;
