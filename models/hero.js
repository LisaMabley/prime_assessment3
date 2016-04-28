// Import mongoose
var mongoose = require('mongoose');

// Init schema
var Schema = mongoose.Schema;

// Create hero schema
var heroSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

// Connect schema to MongoDB
var Hero = mongoose.model('Hero', heroSchema);

// Export for use in other files
module.exports = Hero;
