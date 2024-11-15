const express = require("express");
const { getHobby } = require("../Controllers/hobby.controller")

const router = express.Router();

router.get('/name', getHobby);

module.exports = router;
