/*********************************************************************************
 * ITE5315 – Project
 * I declare that this assignment is my own work in accordance with Humber Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Sonia Student ID: N01652809 Date: 16-Apr-2025
 * Name: Rohit Student ID: N01662302 Date: 16-Apr-2025
 ********************************************************************************/

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/restaurants", restaurantRoutes);

app.get('/', (req, res) => {
    res.send('Welcome I am landing page of your website!');
  });
  

db.initialize(process.env.MONGO_CONN_STRING)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}, welcome to Restaurant API!`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
