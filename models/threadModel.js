const mongoose = require("mongoose");

const threadSchema = mongoose.Schema(
  {
    Colour: {
      type: String,
      required: true,
    },
    Code: {
      type: String,
      required: true,
      unique: true,
    },
    Quantity: {
      type: String,
    },
  },
  { timestamps: true }
);

const threadModel = mongoose.model("Threads", threadSchema);
module.exports = threadModel;
