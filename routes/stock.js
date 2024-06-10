const express = require("express");
const {
  addThreadController,
  getThreadController,
} = require("../controllers/thread");
const { requireSignIn } = require("../middlewares/auth");
const router = express.Router();

// routes related to threads
router.post("/addthread", requireSignIn, addThreadController);
router.get("/allthreads", getThreadController);

module.exports = router;
