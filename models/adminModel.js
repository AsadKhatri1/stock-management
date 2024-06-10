const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
      minLength: "8",
    },
  },
  { timestamps: true }
);

const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
