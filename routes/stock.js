const express = require("express");
const {
  addThreadController,
  getThreadController,
  delThreadController,
  updateThreadController,
} = require("../controllers/thread");
const { requireSignIn } = require("../middlewares/auth");
const router = express.Router();

// routes related to threads
router.post("/addthread", requireSignIn, addThreadController);
router.get("/allthreads", getThreadController);
router.delete("/delthread/:id", requireSignIn, delThreadController);
router.put("/updatethread/:id", requireSignIn, updateThreadController);

module.exports = router;
