const jwt = require('jsonwebtoken');
const User = require("../../db/models/user");
const config = require("../../server/config");

module.exports = function (app, passport) {
  app.get("/login", (req, res) => {
    res.redirect("/");
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("login", {session: false}, (err, user, result) => {
      if (err) throw err;
      if (!user) {
        returnError(res, 401, result.field, result.message);
      } else {
        req.logIn(user, {session: false}, (err) => {
          if (err) {
            next(err);
          } else {
            const token = jwt.sign(user.toJSON(), config.secret);
            res.json({user, token});
          }
        });
      }
    })(req, res, next);
  });

  app.post("/api/signup", async (req, res, next) => {
    passport.authenticate("signup", async (err, user, result) => {
      if (err) throw err;
      if (!user) {
        returnError(res, 400, "name", result.message);
      } else {
        try {
          user.name = req.body.userName;
          user.save(function (err) {
            if (err) throw err;

            req.logIn((user, err) => {
              if (err) {
                next(err);
              } else {
                res.json(user);
              }
            });
          });
        } catch (err) {
          return done(err);
        }
      }
    })(req, res, next);
  });

  app.post("/api/logout", (req, res) => {
    req.logout();
    res.end();
  });

  app.post("/api/currentUser", (req, res) => {
    res.json(req.user);
  });

  function returnError(res, status, field, message) {
    res.status(status);
    res.json({ message: message, field: field });
  }
};
