const express = require("express");
const { getDream } = require("../Controllers/dream.controller")

const router = express.Router();

router.get('/dream', getDream);

module.exports = router;
