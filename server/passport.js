const passport = require('passport');
const passportJWT = require("passport-jwt");
const passwordHash = require("password-hash");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../db/models/user");
const config = require("../server/config.json");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "userEmail",
      passwordField: "userPass",
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({
          email: username
            .toLowerCase()
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, ""),
        }).exec();
        if (user) {
          if (passwordHash.verify(password, user.password)) {
            done(null, user);
          } else {
            done(null, false, {
              message: "Incorrect password.",
              field: "userPass",
            });
          }
        } else {
          done(null, false, {
            message: "Incorrect login.",
            field: "userEmail",
          });
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "userEmail",
      passwordField: "userPass",
    },
    async (user, pass, done) => {
      const email = user
        .toLowerCase()
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "");
      const password = pass
        .toLowerCase()
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "");
      try {
        const user = await User.findOne({ email });

        if (!user) {
          if (!email) {
            done(null, false, { message: "Required field.", field: "email" });
          } else if (!password) {
            done(null, false, {
              message: "Required field.",
              field: "password",
            });
          } else {
            let user = new User({
              email: email,
              password: passwordHash.generate(password),
            });
            done(null, user);
          }
        } else {
          done(null, false, { message: "This email is already taken." });
        }
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.secret,
    },
    async (token, done) => {
      try{
        const user = await User.findById(token);
        return done(null, user);
      }
      catch(err){
        return done(err);
      }
    }
  )
);