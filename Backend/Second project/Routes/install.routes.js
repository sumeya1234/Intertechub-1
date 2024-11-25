const express = require("express");
const router = express.Router();
const { installTables } = require("../Controllers/install.controller"); // Import the install controller

// Route to install database tables
router.post("/", installTables);

module.exports = router;
