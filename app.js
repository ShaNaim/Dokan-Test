const express = require("express");
const morgan = require("morgan");
const { render } = require("ejs");
const bodyParser = require("body-parser");

//Routers
const authRouters = require("./routers/authRouters");
const homeRouters = require("./routers/homeRouters");
const productRouters = require("./routers/productRouters");

//Ecpress Instance
const app = express();

// middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// register view engine
app.set("view engine", "ejs");

// listen for req
// Connect to db
app.listen(5000);

// Router Middleware
app.use(productRouters);
app.use(homeRouters);
app.use(authRouters);

//404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
