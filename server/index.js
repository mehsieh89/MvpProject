var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var Poke = require('../database-mongo');
var request = require('request');

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

app.post('/items', function (req, res) {
  console.log(req.body.query)
  // var options = {
  // 	url: 'http://pokeapi.co/api/v2/' + req.body.query + '/'
  // }
  request('http://pokeapi.co/api/v2/pokemon/scizor/', function(err, res, data) {
  	console.log('work?')
  	var scizor = JSON.parse(data);
  	console.log('scizor data', scizor);
  });

  // items.selectAll(function(err, data) {
  //   if(err) {
  //     console.log('meow :<')
  //     res.sendStatus(500);
  //   } else {
  //     console.log('get received!')	
  //     res.json(data);
  //   }
  // });
  // res.send('meow-mix');
  res.end()
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

