/*
     File name: business.js
     Student's name: Sukhjinder Kaur
     Student ID: 301087895
     Date: 25/10/2020
*/

let mongoose = require('mongoose');

// create a model class
let businessSchema = mongoose.Schema(
  {
    contact_f_name: String,
    contact_l_name: String,
    phone_number: String,
    email: String
  },
  {
    collection: "business_list"
  }
);

module.exports = mongoose.model('business', businessSchema);
