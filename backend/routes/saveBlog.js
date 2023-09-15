import express from "express";
import { getSavedBlogs, saveBlog, unSaveBlog } from "../controllers/saveBlog.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = express.Router();

router.use(verifyToken);
router.get("/", getSavedBlogs);
router.post("/", saveBlog);
router.delete("/:id", unSaveBlog);

export default router;