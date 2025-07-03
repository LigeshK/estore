const express = require("express"); // Import Express framework
const cors = require("cors"); // Import CORS middleware

// Import routers for product categories and products
const productCategoriesRouter = require("./routes/productCategories");
const productsRouter = require("./routes/products");

const app = express(); // Create Express app instance

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/productCategories", productCategoriesRouter); // Mount product categories routes
app.use("/products", productsRouter); // Mount products routes

const PORT = 5001; // Define server port
app.listen(PORT, () => {
  console.log(`estoreServer is running on port ${PORT}`); // Log server start
});
