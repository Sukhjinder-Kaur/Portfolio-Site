let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let businessController = require('../controllers/business');

//helper function to guard purposes

function requireAuth(req, res, next) {
  //if theuser is logged in
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

// GET route for the book list page
router.get('/', businessController.displayBusinessList);

// GET route for displaying the add  page- create operations
router.get('/add', requireAuth, businessController.displayAddPage);

// POST route for processing the add  page- create operations
router.post('/add', requireAuth, businessController.processAddPage);

// GET route for displaying the edit  page- update operations
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

// POST route for processing the edit  page- update operations
router.post('/edit/:id', requireAuth, businessController.processEditPage);

// GET request to perform deletion- update operations
router.get('/delete/:id', requireAuth, businessController.performDeletion);

module.exports = router;
