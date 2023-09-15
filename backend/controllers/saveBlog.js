import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import SaveBlog from "../models/SaveBlog.js";

export const getSavedBlogs = asyncHandler(async (req, res) => {
    const savedBlogs = await SaveBlog
        .find({ userId: req.query.userId })
        .populate("blogId authorId");
    return res.status(200).json(savedBlogs);
});

export const saveBlog = asyncHandler(async (req, res) => {
    const { authorId, userId, blogId } = req.body;
    
    if (!authorId || !userId || !blogId) {
        return res.sendStatus(400);
    }
    
    const blog = await Blog.findById(blogId);
    blog.isSaved = true;
    await blog.save();

    const blogNeedToSave = {
        authorId,
        userId,
        blogId,
    };

    await SaveBlog.create(blogNeedToSave);
    return res.status(201).json("Save blog success");
});

export const unSaveBlog = asyncHandler(async (req, res) => {
    const saveBlog = await SaveBlog.findById(req.params.id);
    const blog = await Blog.findById(saveBlog.blogId);
    
    if (!saveBlog) {
        return res.sendStatus(404);
    }
    
    blog.isSaved = false;
    await blog.save();

    await saveBlog.deleteOne();
    return res.sendStatus(200);
});