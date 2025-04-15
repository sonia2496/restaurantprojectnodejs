/*********************************************************************************
 * ITE5315 – Project
 * I declare that this assignment is my own work in accordance with Humber Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Sonia Student ID: N01652809 Date: 16-Apr-2025
 * Name: Rohit Student ID: N01662302 Date: 16-Apr-2025
 ********************************************************************************/

const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number
    }
  ],
  name: String,
  restaurant_id: String
}, {timestamps : true});

module.exports = mongoose.model('restaurants_collection', RestaurantSchema);
