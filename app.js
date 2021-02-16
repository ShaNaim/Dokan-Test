const express = require("express");
const app = express();
const morgan = require("morgan");
// register view engine
app.set("view engine", "ejs");

// listen for req
app.listen(5000);
// var path = `${__dirname}/views/`;
// const root = { root: path };

//middleware somewhat\
// app.use((req, res, next) => {
//   console.log("inside middleware");
//   console.log("host :", req.hostname);
//   console.log("path :", req.path);
//   console.log("method :", req.method);
//   next();
// });

app.use(morgan("dev"));
app.use(express.static("public"));
app.get("/", (req, res) => {
  // res.sendFile("index.html", root);
  const users = [
    { userName: "Ovi", status: "Admin" },
    { userName: "Shaniam", status: "IT" },
    { userName: "Masud", status: "Customer" },
  ];
  res.render("index", { title: "home", users });
});

app.get("/about", (req, res) => {
  //res.sendFile("about.html", root);
  res.render("about", { title: "About" });
});

app.get("/login", (req, res) => {
  //res.redirect("/about");
  res.render("login", { title: "Login" });
});

app.get("/home", (req, res) => {
  //res.sendFile("./layouts/home.html", root);
});

app.use((req, res) => {
  //res.status(404).sendFile("404.html", root);
  res.status(404).render("404", { title: "404" });
});
