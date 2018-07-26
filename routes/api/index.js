const router = require("express").Router();
const userRoutes = require("./users");
const cardRoutes = require("./cards");

router.use("/user", userRoutes);
router.use("/card", cardRoutes);

module.exports = router;
