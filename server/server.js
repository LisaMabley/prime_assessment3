// Invisibility
// Flight
// Super Speed
// Heat Vision
// Super Strength
// Accelerated Healing
// Power Blast
// Animal Affinity
// Hero Listing & Removal
// This section should show a list of heroes, displaying all the information
// from the entry captured in the hero creation section. Each listing should have a button to delete the hero from the database.

// Vendor imports
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Local imports
var indexRouter = require('./routes/index');
var heroRouter = require('./routes/heroes');

// Init express application
var app = express();

// Set up Mongo
var mongoUri = 'mongodb://localhost/DSK_Heros';
var MongoDB = mongoose.connect(mongoUri).connection;

// Establish Mongo connection
MongoDB.on('error', function(err) {
  console.log('MongoDB connection error:', err);
});

MongoDB.on('open', function() {
  console.log('MongoDB connection open.');
})

// Middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());

// Routes
app.use('/', indexRouter);
app.use('/heroes', heroRouter);

// Start server
var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port, '- Enter Control + C to exit');
});
