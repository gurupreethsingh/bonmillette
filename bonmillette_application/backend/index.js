const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken"); // For token verification
const path = require("path");
const fs = require("fs");


dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 3006;

mongoose
  .connect("mongodb://127.0.0.1:27017/bonmillette")
  .then(() => {
    console.log("Connected to mongodb.");
  })
  .catch((err) => {
    console.log("Connection to mongo db failed,", err);
  });

app.listen(PORT, () => {
  console.log(`Connected to server successfully at port number ${PORT}`);
});
