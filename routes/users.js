/*
     File name: user.js
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 10/10/2020
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
