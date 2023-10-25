import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { upload } from "../utils/upload.js";
import {
    getAllBlogs,
    getCategoryBlogs,
    getResults,
    getBlogDetail,
    getBlogsByAuthors,
    createBlog,
    updateBlog,
    deleteBlog,
    likeBlog
} from "../controllers/blog.js";

const router = express.Router();

// Public routes
router.get("/", getAllBlogs);
router.get("/category", getCategoryBlogs);
router.get("/search", getResults);
router.get("/author-following", verifyToken, getBlogsByAuthors);
router.get("/:id", getBlogDetail);

// Private routes
router.post("/", verifyToken, upload.single("picture"), createBlog);
router.post("/:id/like", verifyToken, likeBlog);
router.patch("/:id", verifyToken, upload.single("picture"), updateBlog);
router.delete("/:id", verifyToken, deleteBlog);

export default router;