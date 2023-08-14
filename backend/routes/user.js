import express from "express";
import { getUser, getUserBlog, updateUser } from "../controllers/user.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/:id", getUser);
router.get("/:id/user-blog", verifyToken, getUserBlog);
router.patch("/:id", verifyToken, updateUser);

export default router;