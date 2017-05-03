var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var Poke = require('../database-mongo/index.js');
var request = require('request');
// var Promise = require('bluebird');

var app = express();

// UNCOMMENT FOR REACT

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.json());

app.get('/items', function (req, res) {
    // url: 'https://api.spotify.com/v1/search/?q=name:neyo&type=album,track'
  request('https://api.spotify.com/v1/search/?q=name:closer&type=track', (err, response, data) => {
  console.log('hi');
  console.log(data);
  res.json(data);
  res.end()
  })
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

