/*
     File name: user.js
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 25/10/2020
*/

//require modules for the user module
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { model } = require('./business');

let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: '',
      trim: true,
      required: 'username is required'
    },
    /*
      password: {
      type: String,
      default: '',
      trim: true,
      required: 'password is required'
      },
    */
    email: {
      type: String,
      default: '',
      trim: true,
      required: 'email is required'
    },

    displayName: {
      type: String,
      default: '',
      trim: true,
      required: 'displayName is required'
    },
    created: {
      type: Date,
      default: Date.now
    },

    update: {
      type: Date,
      default: Date.now
    },

  },
  {
    collection: "users"
  }
)
//configure options for user model

let options = ({ missingPasswordError: 'Wrong / Missing Password' });

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
