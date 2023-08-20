import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog,
    getComments,
    getCategoryBlogs
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/category", getCategoryBlogs);
router.post("/", verifyToken, createBlog);
router.route("/:id")
    .get(getBlog)
    .patch(verifyToken, updateBlog)
    .delete(verifyToken, deleteBlog);
router.get("/:id/comments", getComments);

export default router;