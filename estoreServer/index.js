const express = require("express"); // Importing express for server setup
const app = express(); // Express server setup

const mysql = require("mysql2"); // MySQL database connection

// Create a connection pool for MySQL
const pool = mysql.createPool({
  host: "localhost", // Database host
  user: "root", // Database user
  password: "Dev@2025", // Database password
  database: "estore", // Database name
  port: 3306, // Database port
  multipleStatements: true, // Allow multiple SQL statements in a single query
});

app.get("/", (req, res) => {
  let categoryData;
  pool.query("SELECT * FROM categories", (err, results) => {
    if (err) {
      res.status(500).send("Query execution failed: " + err.message);
    } else {
      categoryData = results;
      res.status(200).send(categoryData); // Send the category data as JSON response
    }
  });
}); // Endpoint to fetch categories

const PORT = "5001";
const server = app.listen(PORT, () => {
  console.log("estoreServer is running on port 5001");
});
