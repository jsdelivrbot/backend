const express = require("express");
const template = require("./template");

const router = express.Router();
router.use("/templates", template);

module.exports = router;
