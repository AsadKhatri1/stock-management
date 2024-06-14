const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoute = require("./routes/admin");
const threadRoute = require("./routes/stock");
const fabricRoute = require("./routes/fabric");

const app = express();

const port = process.env.PORT;

// middlewears

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes

app.use("/api/admin", adminRoute);
app.use("/api/thread", threadRoute);
app.use("/api/fabric", fabricRoute);

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`App is listening ${port} and DB connected`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
