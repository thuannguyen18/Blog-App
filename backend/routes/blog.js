import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", verifyToken, createBlog);
router.route("/:id")
    .get(getBlog)
    .patch(verifyToken, updateBlog)
    .delete(verifyToken, deleteBlog);

export default router;