const Piece = require("../models/Piece");

exports.getAllInventory = async (req, res) => {
  try {
    const inventory = await Piece.find();

    res.status(200).json({
      status: "success",
      results: inventory.length,
      data: {
        inventory
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.getInventoryPieceById = async (req, res) => {
  try {
    const inventoryPiece = await Piece.findById(req.params.id);
    // Piece.findOne({_id!!!!: req.params.id})
    res.status(200).json({
      status: "success",
      data: {
        inventoryPiece
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.getInventoryPieceByTitle = (req, res) => {
  // const { pieceTitle } = req.query;
  // // const filteredInventory = inventory.filter(piece => {
  // //   if (piece.title.toLowerCase().includes(pieceTitle.toLowerCase())) {
  // //     return piece;
  // //   }
  // // });
  // // res.status(200).json({
  // //   status: "success",
  // //   data: {
  // //     filteredInventory
  // //   }
  // // });
};

exports.createInventoryPiece = async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const newInventoryPiece = await Piece.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        inventoryPiece: newInventoryPiece
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateInventoryPiece = async (req, res) => {
  try {
    // const id = Number(req.params.id);
    // const inventoryPiece = inventory.find(el => el.id === id);
    console.log("req.body patch:", req.body);
    const inventoryPiece = await Piece.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        inventoryPiece
      }
    });
  } catch (err) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    });
  }
};

exports.deleteInventoryPiece = async (req, res) => {
  try {
    await Piece.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null
    });
  } catch (err) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    });
  }

  // const id = Number(req.params.id);
  // // const inventoryPiece = inventory.find(el => el.id === id);
  // if (!inventoryPiece) {
  //   return res.status(404).json({
  //     status: "fail",
  //     message: "Invalid id"
  //   });
  // }
  // const inventoryPieceIndex = inventory.indexOf(inventoryPiece);
  // inventory.splice(inventoryPieceIndex, 1);
  // res.status(204).json({
  //   status: "success",
  //   data: null
  // });
};
