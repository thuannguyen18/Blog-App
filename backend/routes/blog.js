import express from "express";
import multer from "multer";
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
router.get("/category", getCategoryBlogs);
router.post("/", verifyToken, upload.single("picture"), createBlog);
router.route("/:id")
    .get(getBlog)
    .patch(verifyToken, upload.single("picture"), updateBlog)
    .delete(verifyToken, deleteBlog);
router.get("/:id/comments", getComments);

export default router;