const express = require("express");
const blogController = require("../controllers/blogController");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.use(verifyToken);
router.get("/", blogController.getAllBlogs);
router.post("/", blogController.createBlog);
router.route("/:id")
    .get(blogController.getBlog)
    .patch(blogController.updateBlog)
    .delete(blogController.deleteBlog);

module.exports = router;