const fs = require("fs");

const inventory = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/inventory.json`)
);

exports.checkID = (req, res, next, val) => {
  console.log(`InventoryPiece id is: ${val}`);

  if (Number(req.params.id) > inventory.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID"
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price"
    });
  }
  next();
};

exports.getAllInventory = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    results: inventory.length,
    data: {
      inventory
    }
  });
};

exports.getInventoryPieceById = (req, res) => {
  const id = Number(req.params.id);

  const inventoryPiece = inventory.find(el => el.id === id);

  res.status(200).json({
    status: "success",
    data: {
      inventoryPiece
    }
  });
};

exports.getInventoryPieceByTitle = (req, res) => {
  const { pieceTitle } = req.query;

  const filteredInventory = inventory.filter(piece => {
    if (piece.title.toLowerCase().includes(pieceTitle.toLowerCase())) {
      return piece;
    }
  });

  res.status(200).json({
    status: "success",
    data: {
      filteredInventory
    }
  });
};

exports.createInventoryPiece = (req, res) => {
  // console.log(req.body);

  const newId = inventory[inventory.length - 1].id + 1;
  const newInventoryPiece = Object.assign({ id: newId }, req.body);

  inventory.push(newInventoryPiece);

  fs.writeFile(
    `${__dirname}/dev-data/data/inventory.json`,
    JSON.stringify(inventory),
    () => {
      res.status(201).json({
        status: "success",
        data: {
          inventoryPiece: newInventoryPiece
        }
      });
    }
  );
};

exports.updateInventoryPiece = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      inventoryPiece: "<Updated inventoryPiece here...>"
    }
  });
};

exports.deleteInventoryPiece = (req, res) => {
  const id = Number(req.params.id);
  const inventoryPiece = inventory.find(el => el.id === id);

  if (!inventoryPiece) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id"
    });
  }
  const inventoryPieceIndex = inventory.indexOf(inventoryPiece);
  inventory.splice(inventoryPieceIndex, 1);
  res.status(204).json({
    status: "success",
    data: null
  });

  res.status(204).json({
    status: "success",
    data: null
  });
};
