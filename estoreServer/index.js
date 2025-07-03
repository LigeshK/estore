const express = require("express"); // Importing express for server setup
const app = express(); // Express server setup

app.use("/productCategories", require("./Routes/productCategories")); // Importing product categories route

const PORT = "5001";
const server = app.listen(PORT, () => {
  console.log("estoreServer is running on port 5001");
});
