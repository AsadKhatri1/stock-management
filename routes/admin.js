const express = require("express");
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/adminController");
const { requireSignIn } = require("../middlewares/auth");
const router = express.Router();

// routes related to admin

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
