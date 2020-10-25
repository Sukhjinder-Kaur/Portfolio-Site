/*
     File name: app.js
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 25/10/2020
*/
/*This  is the main files which links all the site structure together */
//Installed third party packages and requires for linking the dependencies we need to run the project
let  createError = require('http-errors');
let  express = require('express');
let  path = require('path');
let  cookieParser = require('cookie-parser');//pakages to used for package prespectives
let  logger = require('morgan');//pakages to used for package prespectives

//modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

//database setup
let mongoose = require('mongoose');
let DB = require('./db');

//pointing mongoose to the db URL
mongoose.connect(DB.URI,{useNewUrlParser: true, useUnifiedTopology:true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', function() {
console.log('Connected to MongoDB....')
});


//Routers
let indexRouter = require('../routes/index');
let businessRouter = require('../routes/business');
let usersRouter = require('../routes/users');// not being used

// for creating an instance of the express application itself
let  app = express();

// view engine setup to configure views using path.join
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');//express -e

//activations
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));//static routes
app.use(express.static(path.join(__dirname,'../../node_modules')));

//setup express session
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));

//initialize flash
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport user configuration
//create a user model instance
let userModel = require('../models/user');
let User = userModel.User;

//implement a user authentication strategy
passport.use(User.createStrategy());

//serialize and deserialize the user info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//activations
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/business-list', businessRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{ title: 'Error' });
});

module.exports = app;
