const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create)
  .delete(usersController.deleteAll);

router
  .route("/:id")
  .get(usersController.findById)
  .update(usersController.updateById)
  .delete(usersController.deleteById);

module.exports = router;
