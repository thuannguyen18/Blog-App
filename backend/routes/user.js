import express from "express";
import { getUser, getUserBlog, updateUser, uploadFile } from "../controllers/user.js";
import verifyToken from "../middlewares/verifyToken.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.use(verifyToken);
router.get("/:id", getUser);
router.get("/:id/user-blog", getUserBlog);
router.patch("/:id", updateUser);
router.post("/:id/upload-file", upload.single("avatar"), uploadFile);

export default router;