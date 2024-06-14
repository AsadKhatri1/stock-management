const mongoose = require("mongoose");

const fabricSchema = mongoose.Schema(
  {
    Colour: {
      type: String,
      required: true,
    },

    Length: {
      type: String,
    },
  },
  { timestamps: true }
);

const fabricModel = mongoose.model("Fabric", fabricSchema);
module.exports = fabricModel;
