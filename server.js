const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const passport = require('passport');

const port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;

require("./db");
require("./server/passport");

const auth = require("./server/auth");
const routes = require("./server/routes");

const app = express();

app.locals.rootPath = __dirname;

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", auth);
app.use(passport.authenticate('jwt', { session: false }));
app.use("/api", routes);

app.all("*", (req, res) =>
  res.sendFile(path.resolve("public/dist/index.html"))
);

app.listen(port, () => console.log("Listening on port " + port));

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err);
});