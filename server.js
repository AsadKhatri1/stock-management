const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoute = require("./routes/admin");

const app = express();

const port = process.env.PORT;

// middlewears

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes

app.get("/", (req, res) => {
  res.send("home page 2");
});

app.use("/api/admin", adminRoute);

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
