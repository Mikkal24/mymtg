const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../../models");
const router = require("express").Router();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.User.find({ where: { id: id } })
    .then(dbModel => done(null, user))
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
        return done(null, dbModel[0].dataValues);
      })
      .catch(err => {
        return done(err);
      });
  })
);

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) console.log(err);
    if (info) res.status(401).send(info);

    req.logIn(user, err => {
      if (err) return next(err);
      return res.send(user);
    });
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("Goodbye!");
});

router.get("/checkstatus", (req, res) => {
  req.user
    ? res.status(200).json({ authenticated: true })
    : res.status(204).send("User has not been authenticated");
});

module.exports = router;
