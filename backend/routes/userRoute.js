const express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.use(verifyToken);
router.get("/:id", userController.getUser);

module.exports = router;