const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all properties
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM properties");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// POST a new property (optional)
router.post("/", async (req, res) => {
  const { title, description, price, image_url } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO properties (title, description, price, image_url) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, price, image_url]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
