const express = require("express");
const { getDream } = require("../Controllers/dream.controller")

const router = express.Router();

router.get('/name', getDream);

module.exports = router;
