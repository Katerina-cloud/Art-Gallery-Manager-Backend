const express = require("express");
const inventoryController = require("../controllers/inventoryController");

const router = express.Router();

// router.param("id", inventoryController.checkID);

router
  .route("/")
  .get((req, res) => {
    if (req.query.pieceTitle) {
      inventoryController.getInventoryPieceByTitle(req, res);
    } else {
      inventoryController.getAllInventory(req, res);
    }
  })
  .post(inventoryController.createInventoryPiece);

router
  .route("/:id")
  .get(inventoryController.getInventoryPieceById)
  .patch(inventoryController.updateInventoryPiece)
  .delete(inventoryController.deleteInventoryPiece);

module.exports = router;
