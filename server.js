const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
// const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

/* for passport */

app.use(
  session({
    secret: "supersecretsecret",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

const PORT = 8080;

app.listen(PORT, function() {
  console.log("We're running on port " + PORT + " mang");
});
