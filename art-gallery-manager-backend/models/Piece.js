const { Schema } = require("mongoose");
const { model } = require("mongoose");

const pieceSchema = new Schema({
  title: {
    type: String,
    required: [true, "A pice must have a title"]
  },
  artist: {
    type: String,
    required: [true, "A pice must have an author artist"]
  },
  medium: {
    type: String,
    required: [true, "A pice must have a medium"]
  },
  status: {
    type: String,
    required: [true, "A pice must have a status"]
  },
  retailPrice: {
    type: Number,
    required: [true, "A pice must have a retail price"]
  },
  purchaseDate: {
    type: String,
    required: [true, "A pice must have a purchase date"]
  },
  boughtFrom: {
    type: String,
    required: [true, "A pice must have a customer"]
  },
  sellDate: String,
  loanStartDate: String,
  loanEndDate: String
});

const Piece = model("Piece", pieceSchema);

module.exports = Piece;
