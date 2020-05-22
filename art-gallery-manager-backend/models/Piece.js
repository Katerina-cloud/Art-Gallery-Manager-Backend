const { Schema } = require('mongoose');
const { model } = require('mongoose');

const pieceSchema = new Schema({
  imageId: {
    type: Number,
    required: [true, 'A pice must have an imageId'],
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  imageCover: {
    type: String
  },
  title: {
    type: String,
    required: [true, 'A pice must have a title'],
    trim: true
  },
  artist: {
    type: String,
    required: [true, 'A pice must have an author artist'],
    trim: true
  },
  medium: {
    type: String,
    required: [true, 'A pice must have a medium'],
    trim: true
  },
  status: {
    type: String,
    required: [true, 'A pice must have a status'],
    enum: {
      values: ['sold', 'available', 'loaned out'],
      message: 'Status is either: sold, available, loaned out'
    },
    trim: true
  },
  retailPrice: {
    type: Number,
    required: [true, 'A pice must have a retail price'],
    trim: true
  },
  purchaseDate: {
    type: Date,
    required: [true, 'A pice must have a purchase date'],
    trim: true
  },
  boughtFrom: {
    type: String,
    required: [true, 'A pice must have a customer'],
    trim: true
  },
  sellDate: {
    type: Date,
    trim: true
  },
  loanStartDate: {
    type: Date,
    trim: true
  },
  loanEndDate: {
    type: Date,
    trim: true
  }
});

pieceSchema.method('toJSON', function() {
  const { _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Piece = model('Piece', pieceSchema);

module.exports = Piece;
