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

router.use(verifyToken);
router.get("/", getAllBlogs);
router.post("/", createBlog);
router.route("/:id")
    .get(getBlog)
    .patch(updateBlog)
    .delete(deleteBlog);

export default router;