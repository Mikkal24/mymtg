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

router.route("/usercards").get(cardsController.findById);

module.exports = router;
