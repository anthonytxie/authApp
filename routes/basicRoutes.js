const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.send("hello welcome to the auth application");
});


module.exports = router;