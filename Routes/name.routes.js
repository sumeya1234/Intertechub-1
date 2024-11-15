const express = require("express");
const { getName } = require("../Controllers/name.controller")

const router = express.Router();

router.get('/name', getName);

module.exports = router;
