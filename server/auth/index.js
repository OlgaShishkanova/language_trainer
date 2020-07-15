const jwt = require("jsonwebtoken");
const express = require("express");
const passport = require('passport');
const router = express.Router();
const config = require("../../server/config");

router.post("/login", (req, res, next) => {
  passport.authenticate("login", { session: false }, (err, user, result) => {
    if (err) throw err;
    if (!user) {
      returnError(res, 401, result.field, result.message);
    } else {
      const token = jwt.sign(user.id, config.secret);
      res.json({ user, token });
    }
  })(req, res, next);
});

router.post("/signup", async (req, res, next) => {
  passport.authenticate("signup", async (err, user, result) => {
    if (err) throw err;
    if (!user) {
      returnError(res, 400, "name", result.message);
    } else {
      try {
        user.name = req.body.userName;
        user.save(function (err) {
          if (err) throw err;
          const token = jwt.sign(user.toJSON(), config.secret);
          res.json({ user, token });
        });
      } catch (err) {
        return done(err);
      }
    }
  })(req, res, next);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.end();
});

function returnError(res, status, field, message) {
  res.status(status);
  res.json({ message, field });
}

module.exports = router;