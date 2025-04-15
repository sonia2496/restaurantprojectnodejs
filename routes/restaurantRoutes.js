/*********************************************************************************
 * ITE5315 – Project
 * I declare that this assignment is my own work in accordance with Humber Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Sonia Student ID: N01652809 Date: 16-Apr-2025
 * Name: Rohit Student ID: N01662302 Date: 16-Apr-2025
 ********************************************************************************/

const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST: Add new restaurant
router.post("/", async (req, res) => {
  try {
    const newRestaurant = await db.addNewRestaurant(req.body);
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.error('Error adding new restaurant:', err);
    res.status(500).json({ error: 'Failed to add new restaurant' });
  }
});


// GET: Get restaurants with optional pagination and borough
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const borough = req.query.borough;

  try {
    const results = await db.getAllRestaurants(page, perPage, borough);
    console.log("rr", results)
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET: Get one restaurant by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await db.getRestaurantById(req.params.id);
    if (!result) return res.status(404).json({ message: "Restaurant not found" });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: Update restaurant by ID
router.put("/:id", async (req, res) => {
  try {
    const updated = await db.updateRestaurantById(req.body, req.params.id);
    if (!updated) return res.status(404).json({ message: "Restaurant not found" });
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: Delete restaurant by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await db.deleteRestaurantById(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Restaurant not found" });
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
