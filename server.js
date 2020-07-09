const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

require('./db');

const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 5000;

app.locals.rootPath = __dirname;

app.use('/public', express.static(path.join(__dirname, 'public')));

require('./server/auth/passport')(passport);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

require('./server/auth')(app, passport);

app.all('*', (req, res) => res.sendFile(path.resolve('public/dist/index.html')));

server.listen(port, () => console.log('Listening on port ' + port));

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;