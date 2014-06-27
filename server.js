var express = require('express'),
    req = require('request'),
    path = require('path'),
    app,
    port;

app = express();
port = process.env.PORT || 8000;
req = require('request');

process.env.PWD = process.cwd();

app.configure(function () {
  app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    response.header(
      'Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length'
    );

    next();
  });

  app.use('/', express.static(__dirname + '/'));
});

app.options('*', function (request, response, next) {
  response.send(200);
});

app.all('*', function (request, response, next) {
  response.sendfile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
