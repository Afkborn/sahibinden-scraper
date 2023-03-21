const express = require("express");
const router = express.Router();
const { testBot } = require("../service/CarTracker");

router.get("/", (req, res) => {
  testBot();
  res.send("Hello World!");
});

module.exports = router;
