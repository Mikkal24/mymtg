const router = require("express").Router();
const cardsController = require("../../controllers/cardsController");

router
  .route("/")
  .get(cardsController.findAll)
  .post(cardsController.create)
  .delete(cardsController.deleteAll);

router
  .route("/:id")
  .get(cardsController.findById)
  .put(cardsController.updateById)
  .delete(cardsController.deleteById);

module.exports = router;
