var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var PokeSchema = mongoose.Schema({
  name: {type: String, unique: true, dropDups: true},
  spriteURL: String
});

var Poke = mongoose.model('Poke', PokeSchema);

module.exports = Poke;