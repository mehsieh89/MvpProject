var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var Poke = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

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

app.get('/items', function (req, res) {
  console.log('merp')
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     console.log('meow :<')
  //     res.sendStatus(500);
  //   } else {
  //     console.log('get received!')	
  //     res.json(data);
  //   }
  // });
  res.send('meow-mix');
  res.end()
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

//url: http://pokeapi.co/api/v2/ + 'pokemon name' or 'number' + '/'