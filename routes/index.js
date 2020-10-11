/*
     File name: index.js
     File Type: Main Routes
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 10/10/2020
*/

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio Site', page: 'home' });
});
/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contacts', { title: 'Contact' });
});

module.exports = router;
