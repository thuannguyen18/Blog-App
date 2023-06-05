const express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require("../middlewares/verifyToken");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.use(verifyToken);
router.get("/:id", userController.getUser);
router.patch("/:id", userController.updateUser);
router.post("/:id/upload-file", upload.single("avatar"), userController.uploadFile);

module.exports = router;