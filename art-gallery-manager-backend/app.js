const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/router');
const Piece = require('./models/Piece');
const importData = require('./dev-data/data/import-dev-data');

const app = express();

// 1) MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/', router);

// 4) Import data from json if DB  is empty
Piece.countDocuments(function(err, count) {
  if (err) console.error(err);
  console.log('count pieces:', count);
  if (!count) importData();
});

module.exports = app;
