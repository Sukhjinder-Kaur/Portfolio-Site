let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create the user model instance
let userModel = require('../models/user');
let User = userModel.User;

//get home page
module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home',displayName: req.user ? req.user.displayName :''});
}

//get about page
module.exports.displayAboutPage = (req, res, next) => {
   res.render('about', { title: 'About',displayName: req.user ? req.user.displayName :'' });
}

//get project page
module.exports.displayProjectsPage = (req, res, next) => {
  res.render('projects', { title: 'Projects',displayName: req.user ? req.user.displayName :'' });
}

//get services page
module.exports.displayServicesPage = (req, res, next) => {
   res.render('services', { title: 'Services',displayName: req.user ? req.user.displayName :'' });
}
//get contact page
module.exports.displayContactsPage = (req, res, next) => {
  res.render('contacts', { title: 'Contact',displayName: req.user ? req.user.displayName :'' });
}

//get contact page
module.exports.displayLoginPage = (req, res, next) => {
  //if user is already logges in
  if (!req.user) {
    res.render('auth/login', {
      title: 'Login',
      messages: req.flash('loginMessage'),
      displayName:req.user ? req.user.displayName:''

    })
  } else {
    return res.render('/');
  }
}

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    //if server error
    if (err) {
      return next(err);
    }
    //if user login error
    if (!user) {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/business-list');
    });
  })(req, res, next);

}

module.exports.displayRegisterPage = (req, res, next) => {
  //check  if the user is not loggedout
  if (!req.user) {
    res.render('auth/register',
      {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
  } else {
    return res.redirect('/');
  }
}

module.exports.processRegisterPage = (req, res, next) => {
  //intantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password:req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });
  User.register(newUser, req.body.password, (err) => {

    if (err) {
      console.log("Error :Inserting the new user");
      if (err.name == "UserExistError") {
        req.flash(
          'registerMessage',
          'Register Error: User already exist!'
        );
        console.log('Error : User already exist!')
      }
      return res.render('auth/register', {
        title: 'Register',
        messages: req.flash('registerMessages'),
        displayName: req.user ? req.user.displayName : ''
      });
    }
    else {
      //if no error exists, then registration is successful and redirect the user and authenticate
      return passport.authenticate('local')(req, res, () => {
        res.redirect('/business-list')
      });
    }
  });

}
module.exports.performLogout = (req, res, next) => {
  req.logout();
  res.redirect('/');
}
