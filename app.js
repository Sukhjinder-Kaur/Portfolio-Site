/*
     File name: app.js
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 10/10/2020
*/
/*This  is the main files which links all the site structure together */
//Installed third party packages and requires for linking the dependencies we need to run the project
let  createError = require('http-errors');
let  express = require('express');
let  path = require('path');
let  cookieParser = require('cookie-parser');//pakages to used for package prespectives
let  logger = require('morgan');//pakages to used for package prespectives

//Routers
let  indexRouter = require('./routes/index');
let  usersRouter = require('./routes/users');// not being used

// for creating an instance of the express application itself
let  app = express();

// view engine setup to configure views using path.join
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//express -e

//activations
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//static routes
app.use(express.static(path.join(__dirname,'node_modules')));

app.use('/', indexRouter);

// app.use('/users', usersRouter);

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
