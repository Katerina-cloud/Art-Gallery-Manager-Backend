const Piece = require('../models/Piece');

exports.getAllInventory = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fileds'];
    excludedFields.forEach(el => delete queryObj[el]);

    console.log(req.query, queryObj);
    const inventory = await Piece.find(queryObj);

    res.status(200).json({
      status: 'success',
      results: inventory.length,
      data: {
        inventory
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getInventoryPieceById = async (req, res) => {
  try {
    const inventoryPiece = await Piece.findById(req.params.id);
    // Piece.findOne({_id: req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        inventoryPiece
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getInventoryPieceByTitle = async (req, res) => {
  try {
    const { pieceTitle } = req.query;

    const filteredInventory = await Piece.find({
      title: { $regex: pieceTitle, $options: 'i' }
    });

    res.status(200).json({
      status: 'success',
      data: {
        filteredInventory
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createInventoryPiece = async (req, res) => {
  try {
    console.log('req.body:', req.body);
    const newInventoryPiece = await Piece.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        inventoryPiece: newInventoryPiece
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateInventoryPiece = async (req, res) => {
  try {
    const inventoryPiece = await Piece.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: 'success',
      data: {
        inventoryPiece
      }
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteInventoryPiece = async (req, res) => {
  try {
    await Piece.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid id'
    });
  }
};
