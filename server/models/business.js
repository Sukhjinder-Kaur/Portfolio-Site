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
