const express = require("express");
const router = express.Router();
const auth = require("./api/auth");
const trips = require("./api/trips");

router.use("/auth", auth);
router.use("/trips", trips);

module.exports = router;
