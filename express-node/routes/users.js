var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get call');
});
router.get('/getData', function(req, res, next) {
  res.send('get Users call');
});


module.exports = router;
