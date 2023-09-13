import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import SaveBlog from "../models/SaveBlog.js";

export const getSavedBlogs = asyncHandler(async (req, res) => {
    const savedBlogs = await SaveBlog
        .find({ userId: req.query.userId })
        .populate("blogId");
    res.status(200).json(savedBlogs);
});

export const saveBlog = asyncHandler(async (req, res) => {
    const { userId, blogId } = req.body;

    const blogNeedToSave = {
        userId,
        blogId,
    };

    await SaveBlog.create(blogNeedToSave);
    return res.status(201).json("Save blog success");
});

export const unSaveBlog = asyncHandler(async (req, res) => {
    res.json("unsave blog ne");
});