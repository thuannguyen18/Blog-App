import express from "express";
import multer from "multer";
import verifyToken from "../middlewares/verifyToken.js";
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

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