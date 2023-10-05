import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import SaveBlog from "../models/SaveBlog.js";

export const getSavedBlogs = asyncHandler(async (req, res) => {
    const savedBlogs = await SaveBlog
        .find({ userId: req.query.userId })
        .populate("blogId authorId");
    return res.status(200).json(savedBlogs);
});

export const saveBlog = asyncHandler(async (req, res) => {
    const { authorId, userId, blogId, saveId } = req.body;
    const blog = await Blog.findById(blogId);

    // if user have saved this blog then unsave it
    if (blog.saves.includes(userId)) {
        const saveBlog = await SaveBlog.findById(saveId);
        blog.saves = blog.saves.filter(id => id.toString() !== userId);
        await blog.save();
        await saveBlog.deleteOne();
        return res.sendStatus(200);
    }

    if (!authorId || !userId || !blogId) {
        return res.sendStatus(400);
    }

    if (!blog) {
        return res.sendStatus(404);
    }

    blog.saves.push(userId);
    await blog.save();

    const blogNeedToSave = { authorId, userId, blogId };
    await SaveBlog.create(blogNeedToSave);
    return res.sendStatus(201);
});

export const unSaveBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const saveBlog = await SaveBlog.findById(id);
    const blog = await Blog.findById(saveBlog.blogId);

    if (!saveBlog) {
        return res.sendStatus(404);
    }

    blog.saves = blog.saves.filter(id => id.toString() !== req.userId);
    await blog.save();

    await saveBlog.deleteOne();
    return res.sendStatus(200);
});