const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 5000;

app.locals.rootPath = __dirname;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.all('*', (req, res) => res.sendFile(path.resolve('public/dist/index.html')));

server.listen(port, () => console.log('Listening on port ' + port));

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;