import express from "express";
import multer from "multer";
import { getUser, getUserBlog, updateUser, changePassword } from "../controllers/user.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

router.get("/:id", getUser);
router.get("/:id/user-blog", verifyToken, getUserBlog);
router.patch("/:id", verifyToken, upload.single("picture"), updateUser);
router.patch("/:id/change-password", verifyToken, changePassword);

export default router;