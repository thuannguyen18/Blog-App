import express from "express";
import multer from "multer";
import verifyToken from "../middlewares/verifyToken.js";
import {
    getAllBlogs,
    getBlogDetail,
    createBlog,
    updateBlog,
    deleteBlog,
    getCategoryBlogs
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

router.get("/", getAllBlogs);
router.get("/:id", getBlogDetail);
router.get("/category", getCategoryBlogs);

router.post("/", verifyToken, upload.single("picture"), createBlog);
router.patch("/:id", verifyToken, upload.single("picture"), updateBlog);
router.delete("/:id", verifyToken, deleteBlog);

export default router;