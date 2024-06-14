const express = require("express");

const { requireSignIn } = require("../middlewares/auth");
const {
  addFabric,
  allFabrics,
  deleteFabric,
  updateFabricController,
} = require("../controllers/fabricController");
const router = express.Router();

// routes related to threads
router.post("/addfabric", requireSignIn, addFabric);
router.get("/allfabric", allFabrics);
router.delete("/deletefabric/:id", requireSignIn, deleteFabric);
router.put("/updatefabric/:id", requireSignIn, updateFabricController);

module.exports = router;
