const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
app.use(taskRoutes);

mongoose
  .connect(
    `${process.env.MONGODB_URL}/tasks?retryWrites=true&w=majority`
  )
  .then((result) => {
    console.log("app running on 3002");
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err);
  });

