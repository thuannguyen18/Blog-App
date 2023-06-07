const asyncHandler = require("express-async-handler");

const Blog = require("../models/Blog");

const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find();

    if (blogs.length < 1) {
        return res.status(400).json({ message: "Blogs not found" });
    }

    res.status(200).json({ blogs });
});

const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id).select("-user_id");

    if (!blog) {
        return res.status(400).json({ message: "Blog not found" });
    }

    res.status(200).json({ blog });
});

const createBlog = asyncHandler(async (req, res) => {
    const { id, title, content } = req.body;

    if (!id || !title || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const note = await Blog.create({ user_id: id, title, content });

    if (note) {
        return res.status(201).json({ message: "New blog created" });
    } else {
        return res.status(400).json({ message: "Invalid note data received" });
    }
});

const updateBlog = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;

    if (!id || !title || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
        return res.status(400).json({ message: "Blog not found" });
    }

    blog.title = title;
    blog.content = content;

    const updatedBlog = await blog.save();

    res.status(200).json(`'${updatedBlog.title}' updated`);
});

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.status(400).json({ message: 'Blog not found' });
    }

    const result = await blog.deleteOne();

    const reply = `Note '${result.title}' with ID ${result._id} deleted`;

    res.json(reply);
});

module.exports = {
    getAllBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
};