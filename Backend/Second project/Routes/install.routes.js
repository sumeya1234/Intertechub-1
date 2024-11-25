const express = require('express');
const router = express.Router();
const installController = require('../Controllers/install.controller');

// Route to install the tables
router.post('/install', installController.installTables);

module.exports = router;
