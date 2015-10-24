var express = require('express');
var router = express.Router();

/* GET home page. */

var Controller = require('./../controller')
router.get('/', function(req, res, next) {
  Controller.find(req, res);
});

router.post('/', function(req, res, next) {
  Controller.create(req, res); // completgar
});

router.put('/:id', function(req, res, next) {
  Controller.create(req, res); // completgar
});

module.exports = router;
