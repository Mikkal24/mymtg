const router = require("express").Router();
const passportController = require("../../controllers/passportController");

router.post("/login", passportController.login);

router.get("/logout", passportController.logout);

router.get("/checkstatus", passportController.checkStatus);

module.exports = router;
