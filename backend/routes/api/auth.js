const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth");
const adminAuth = require("../../controllers/adminAuth");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/admin/register", adminAuth.register);
router.post("/admin/login", adminAuth.login);

module.exports = router;
