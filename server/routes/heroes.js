// Imports
var express = require('express');
var path = require('path');
var Hero = require('../../models/hero');

var router = express.Router();

// Establish routes
router.get('/getAll', function(request, response) {
  Hero.find({}, function(err, heroes) {
    if(err) {
      console.log(err);
      response.sendStatus(500);

    } else {
      response.send(heroes);
    }
  });
});

router.post('/add', function(request, response) {

  // Create a new hero object
  var newHero = new Hero({
    alias: request.body.alias,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    city: request.body.city,
    power_name: request.body.power_name
  });

  newHero.save(function(err) {
    if(err) {
      console.log(err);
      response.sendStatus(500);

    } else {
      response.sendStatus(200);
    }
  })
});

module.exports = router;
