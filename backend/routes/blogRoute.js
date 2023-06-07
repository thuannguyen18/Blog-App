const express = require("express");
const blogController = require("../controllers/blogController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.use(verifyToken);
router.get("/", blogController.getAllBlogs);
router.post("/", blogController.createBlog);
router.get("/:id", blogController.getBlog);
router.patch("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

module.exports = router