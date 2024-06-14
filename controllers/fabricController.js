const fabricModel = require("../models/fabricModel");

// new fabric
const addFabric = async (req, res) => {
  const { Colour, Length } = req.body;
  try {
    if (!Colour) {
      return resizeBy.status(401).json({ message: "Incomplete info" });
    } else {
      const newFabric = await fabricModel({ Colour, Length });
      const savedFabric = await newFabric.save();
      return res
        .status(200)
        .json({ success: true, message: "New Fabric Added", savedFabric });
    }
  } catch (err) {
    console.log(err);
    return resizeBy.status(500).json({ message: "Server error" });
  }
};

// get all fabrics
const allFabrics = async (req, res) => {
  try {
    const fabrics = await fabricModel.find();
    if (fabrics) {
      return res
        .status(200)
        .json({ success: true, message: "all fabrics", fabrics });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

// delete fabric

const deleteFabric = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await fabricModel.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).json({
        success: true,
        message: "Fabric deleted",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const updateFabricController = async (req, res) => {
  try {
    const id = req.params.id;
    const { Length } = req.body;
    const updated = await fabricModel.findByIdAndUpdate(
      id,
      { Length },
      { new: true }
    );
    if (updated) {
      return res.status(200).json({
        success: true,
        message: "Fabric updated",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err?.message,
    });
  }
};
module.exports = {
  addFabric,
  allFabrics,
  deleteFabric,
  updateFabricController,
};
