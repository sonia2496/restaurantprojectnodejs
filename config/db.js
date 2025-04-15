/*********************************************************************************
 * ITE5315 – Project
 * I declare that this assignment is my own work in accordance with Humber Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Sonia Student ID: N01652809 Date: 16-Apr-2025
 * Name: Rohit Student ID: N01662302 Date: 16-Apr-2025
 ********************************************************************************/

const mongoose = require("mongoose");
const Restaurant = require("../models/restaurant");

let dbConnection = null;

module.exports = {
  initialize: function (connectionString) {
    return new Promise((resolve, reject) => {
      if (dbConnection) return resolve();
      mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          dbConnection = mongoose.connection;
          resolve();
        })
        .catch((err) => reject(err));
    });
  },

  addNewRestaurant: function (data) {
    if (Array.isArray(data)) {
      // Insert multiple documents
      return Restaurant.insertMany(data, { ordered: true });
    } else {
      // Insert a single document
      const newRestaurant = new Restaurant(data);
      return newRestaurant.save();
    }
  }
  ,
  getAllRestaurants: function (page, perPage, borough) {
    let filter = {};
    if (borough) filter.borough = borough;

    return Restaurant.find(filter)
      .sort({ restaurant_id: 1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();
  },

  getRestaurantById: function (id) {
    return Restaurant.findOne({ restaurant_id: id }).exec();
  },

  updateRestaurantById: function (data, id) {
    return Restaurant.findOneAndUpdate({ restaurant_id: id }, data, { new: true }).exec();
  },

  deleteRestaurantById: function (id) {
    return Restaurant.findOneAndDelete({ restaurant_id: id }).exec();
  }
  
};
