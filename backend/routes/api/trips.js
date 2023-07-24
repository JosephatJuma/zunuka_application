const express = require("express");
const router = express.Router();
const tripsController = require("../../controllers/trips");

router.post(
  "/add",
  tripsController.upload.single("image"),
  tripsController.addTrip
);

router.get("/", tripsController.all);
router.delete("/:trip_id", tripsController.delete);
router.patch("/:trip_id", tripsController.modify);

module.exports = router;
