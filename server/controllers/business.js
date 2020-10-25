let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to db schema
let Business = require('../models/business');

module.exports.displayBusinessList = (req, res, next)=> {
  Business.find((err, businessList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('business/list', { title: 'Business Contacts', BusinessList: businessList ,displayName:req.user ? req.user.displayName :''});
    }
  });
}

module.exports.displayAddPage = (req, res, next) => {
  res.render('business/add', { title: 'Add Business Contact', displayName: req.user ? req.user.displayName : '' });
}

module.exports.processAddPage = (req, res, next) => {

  let newBusiness = Business({
    "contact_f_name": req.body.first_name,
    "contact_l_name": req.body.last_name,
    "email": req.body.email,
    "phone_number":req.body.phone_number
  });
  Business.create(newBusiness, (err, Business) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the list
      res.redirect('/business-list');
    }
  });
}

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  Business.findById(id, (err, toEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render('business/edit', { title: 'Edit Business Contact', business: toEdit ,displayName:req.user ? req.user.displayName :''});
    }
  });
}

module.exports. processEditPage = (req, res, next) => {
  let id = req.params.id;

  let updateBusiness = Business({
    "_id": id,
    "contact_f_name": req.body.first_name,
    "contact_l_name": req.body.last_name,
    "email": req.body.email,
    "phone_number":req.body.phone_number
  });
  Business.updateOne({ _id: id },updateBusiness,(err)=>{
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refrest the list
      res.redirect('/business-list');
    }
  });
}

module.exports.performDeletion = (req, res, next) => {
  let id = req.params.id;
  Business.remove({ _id: id }, (err) => {
    if (err) {
     console.log(err);
      res.end(err);
    } else {
      //refrest the list
      res.redirect('/business-list');
    }
  });
}
