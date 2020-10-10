/*
     File name: index.js
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 10/10/2020
*/

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio Site' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contacts', { title: 'Contact' });
});

module.exports = router;