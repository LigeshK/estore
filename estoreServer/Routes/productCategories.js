const express = require("express"); // Import Express for router
const {
  connectionSettings,
} = require("../ConnectionSettings/connectionSettings"); // Import DB connection
const productCategories = express.Router(); // Create router instance

const pool = connectionSettings(); // Get connection pool

// GET /productCategories - Fetch all product categories
productCategories.get("/", (req, res) => {
  pool.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Query execution failed: " + err.message });
    } else {
      res.status(200).json(results); // Send categories as JSON
    }
  });
});

module.exports = productCategories; // Export the router
