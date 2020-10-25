/*
     File name: index.js
     File Type: Main Routes
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 10/10/2020
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);
/* GET About page. */
router.get('/about', indexController.displayAboutPage);
/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET Services page. */
router.get('/services', indexController.displayServicesPage);
/* GET Contact page. */
router.get('/contact', indexController.displayContactsPage);
/* GET route for displaying the login page. */
router.get('/login', indexController.displayLoginPage);
/* POST route for processing the login page*/
router.post('/login', indexController.processLoginPage);
/* GET route for displaying the register page. */
router.get('/register', indexController.displayRegisterPage);
/* POST route for processing the register page*/
router.post('/register', indexController.processRegisterPage);
/* GET to perform yser logout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
