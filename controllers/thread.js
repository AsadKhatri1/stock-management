const threadModel = require("../models/threadModel");

const addThreadController = async (req, res) => {
  try {
    const { Colour, Code, Quantity } = req.body;
    if (!Colour || !Code) {
      return res
        .status(401)
        .json({ success: false, message: "Incomplete Information" });
    }
    const newThread = await threadModel({ Colour, Code, Quantity });
    const savedThread = await newThread.save();
    res.status(201).json({
      success: true,
      message: "New Thread Added",
      savedThread,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error in adding thread" });
  }
};
const getThreadController = async (req, res) => {
  try {
    const threads = await threadModel.find();
    if (threads) {
      return res
        .status(200)
        .json({ success: true, message: "All threads", threads: threads });
    }
  } catch (err) {
    console.log(err);
  }
};
const delThreadController = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await threadModel.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).json({
        success: true,
        message: "Thread deleted",
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
  addThreadController,
  getThreadController,
  delThreadController,
};
