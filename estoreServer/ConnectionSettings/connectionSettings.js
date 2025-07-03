// MySQL connection settings module
const mysql = require("mysql2");

// Function to create and return a MySQL connection pool
function connectionSettings() {
  return mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Dev@2025",
    database: "estore",
    connectionLimit: 10,
    multipleStatements: true,
  });
}

module.exports = { connectionSettings };
