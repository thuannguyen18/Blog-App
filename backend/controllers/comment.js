import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";

export const getComments = asyncHandler(async (req, res) => {
    const { page, limit } = req.query;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.sendStatus(404);
    }

    const comments = await Comment
        .find({ blogId: blog._id })
        .populate("userId", "username profilePicturePath")
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: "desc" });

    return res.status(200).json(comments);
});


export const createComment = asyncHandler(async (req, res) => {
    const { userId, blogId, content } = req.body;
    await Comment.create({ userId, blogId, content });
    return res.status(200).json("Comment created");
});


export const updateComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
        return res.sendStatus(404);
    }

    comment.content = req.body.content;
    await comment.save();
    return res.status(200).json("Comment updated");
});


export const deleteComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
        return res.sendStatus(404);
    }

    await comment.deleteOne();
    return res.status(200).json("Comment deleted");
});