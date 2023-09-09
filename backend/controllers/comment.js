import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import User from "../models/User.js";
/** 
** @access Public
** @desc Get comments for specific blog
** @method GET
** @path http://localhost:3500/blog-detail/:id/comments?page=""&limit=""
** @query page=""&limit=""
** @param id
*/
export const getComments = asyncHandler(async (req, res) => {
    const { page, limit } = req.query;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.sendStatus(404);
    }

    const comments = await Comment
        .find({ blogId: blog._id })
        .populate("userId", "username email profilePicturePath")
        .limit(limit * 1)
        .skip((page - 1) * limit);

    return res.status(200).json(comments);
});


/** 
** @access Private
** @desc Create a comment by user in specific blog
** @method POST
** @path http://localhost:3500/blog-detail/create-comment
*/
export const createComment = asyncHandler(async (req, res) => {
    const { userId, blogId, content } = req.body;
    await Comment.create({ userId, blogId, content });
    return res.status(200).json("Comment created");
});


/** 
** @access Private
** @desc Update a comment by user in specific blog
** @method PATCH
** @path http://localhost:3500/blog-detail/update-comment/:id
*/
export const updateComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
        return res.sendStatus(404);
    }

    comment.content = req.body.content;
    await comment.save();
    return res.status(200).json("Comment updated");
});


/** 
** @access Private
** @desc Delete a comment by user in specific blog
** @method DELETE
** @path http://localhost:3500/blog-detail/delete-comment/:id
*/
export const deleteComment = asyncHandler(async (req, res) => {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
        return res.sendStatus(404);
    }

    await comment.deleteOne();
    return res.status(200).json("Comment deleted");
});