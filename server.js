const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
const passportController = require("./controllers/passportController");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

/* for passport */

app.use(
  session({
    secret: "supersecretsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 3600000 //1 hour
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + "/public/mymtg/dist/mymtg"));
app.use("/", routes);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/mymtg/dist/mymtg/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log("We're running on port " + PORT + " mang");
});

db.sequelize.sync({}).then(() => {
  console.log("DB Connected!");
});
