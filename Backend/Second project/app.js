const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); 
const db = require("./Database/db.config"); 
const installRoutes = require("./Routes/install.routes"); 
const bookRoutes = require("./Routes/book.routes"); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); 

// Test Database Connection
db.query("SELECT 1")
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
  });

// Routes
app.use("/api/install", installRoutes); // Route to install database tables
app.use("/api/books", bookRoutes);     // Routes for books collection

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
