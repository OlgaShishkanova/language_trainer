const express = require("express");
const router = express.Router();

router.post("/profile", (req, res) => {
  res.json(req.user);
});

module.exports = router;