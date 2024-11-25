const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); 

const dbConnection = require("./Database/db.config"); // Import database connection
const installRoutes = require("./Routes/install.routes"); // Install route
const bookRoutes = require("./Routes/book.routes"); // Book routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

// Test Database Connection
dbConnection.query("SELECT 1")
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err.message);
  });

// Routes
app.use("/api/install", installRoutes); 
app.use("/api/books", bookRoutes); 


app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
