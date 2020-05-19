const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const tourRouter = require("./routes/inventory");

const app = express();

// 1) MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use("/inventory", tourRouter);

module.exports = app;
