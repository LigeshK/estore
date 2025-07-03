const express = require("express"); // Import Express for router
const {
  connectionSettings,
} = require("../ConnectionSettings/connectionSettings"); // Import DB connection
const products = express.Router(); // Create router instance

const pool = connectionSettings(); // Get connection pool

// GET /products - Fetch all products
products.get("/", (req, res) => {
  pool.query("SELECT * FROM products", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Query execution failed: " + err.message });
    } else {
      res.status(200).json(results); // Send products as JSON
    }
  });
});

module.exports = products; // Export the router
