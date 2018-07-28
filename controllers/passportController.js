const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.find({ where: { id: id } })
    .then(dbModel => done(null, dbModel))
    .catch(err => console.log(err));
});

passport.use(
  new LocalStrategy((username, password, done) => {
    db.User.findOne({
      where: {
        username: username,
        password: password
      }
    })
      .then(dbModel => {
        return done(null, dbModel.dataValues);
      })
      .catch(err => {
        return done(err);
      });
  })
);

module.exports = {
  login: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) console.log(err);
      if (info) res.status(401).send(info);
      req.logIn(user, err => {
        if (err) return next(err);
        delete user.password;
        return res.json(user);
      });
    })(req, res, next);
  },

  logout: (req, res) => {
    req.logout();
    res.status(200).json({ message: "Goodbye!" });
  },

  checkStatus: (req, res) => {
    if (typeof req.user !== "undefined") {
      let user = req.user.dataValues;
      delete user.password;
      res.status(200).json({ authenticated: true, user: user });
    } else {
      res.status(200).json({
        authenticated: false,
        message: "User has not been authenticated"
      });
    }
  }
};
