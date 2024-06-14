const express = require("express");
const {
  registerController,
  loginController,
  getAdmins,
} = require("../controllers/adminController");
const { requireSignIn } = require("../middlewares/auth");
const router = express.Router();

// routes related to admin

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/getAdmins", getAdmins);

module.exports = router;
