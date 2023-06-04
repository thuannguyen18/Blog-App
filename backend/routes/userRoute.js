const express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.use(verifyToken);
router.get("/:id", userController.getUser);
router.patch("/:id", userController.updateUser);

module.exports = router;