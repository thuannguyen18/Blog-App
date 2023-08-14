import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";

/** 
*    @desc Get all blogs (maximun 10 blogs per page)
*    @method GET
*    @path http://localhost:3500/blog
*    @query
*       ?page=[number]&limit=[number]
*       ?newest=[boolean]&limit=[number] 
*       ?random=[boolean]&limit=[number] 
*/
export const getAllBlogs = asyncHandler(async (req, res) => {
    const { page, newest, random, limit } = req.query;
    let blogs;

    if (newest) {
        blogs = await Blog
            .find()
            .populate("userId", "-password -followers -email")
            .sort({ createdAt: -1 })
            .limit(limit * 1);
        return res.status(200).json(blogs);
    }

    if (random) {
        blogs = await Blog.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user"
                }
            },
            { $unwind: "$user" },
            {
                $project: {
                    "_id": 1,
                    "title": 1,
                    "content": 1,
                    "picturePath": 1,
                    "user._id": 1,
                    "user.username": 1,
                    "user.profilePicturePath": 1,
                }
            },
            { $sample: { size: limit * 1 } },
        ]);
        return res.status(200).json(blogs);
    }

    
    blogs = await Blog
        .find()
        .populate("userId", "-password -followers -email")
        .sort({ createdAt: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    const count = await Blog.count();

    res.status(200).json({
        blogs,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
    });
});

/** 
*    @desc Get one blog
8    @path http://localhost:3500/blog/:id
*    @method GET
*/
export const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blog
        .findById(req.params.id)
        .populate("userId", "username email profilePicturePath");

    if (!blog)
        return res.status(404).json({ message: "Blog not found" });

    res.status(200).json(blog);
});

/** 
*    @desc Get comments
*    @method GET
*    @path http://localhost:3500/blog/:id/comments
*    @query ?page=""&limit=""
*/
export const getComments = asyncHandler(async (req, res) => {
    const { page, limit } = req.query;
    const blog = await Blog.findById(req.params.id);

    if (!blog)
        return res.status(404).json({ message: "Blog not found" });

    const comments = await Comment
        .find({ blogId: blog._id })
        .populate("userId", "username email profilePicturePath")
        .sort({ createdAt: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit);

    res.status(200).json(comments);
});

export const createBlog = asyncHandler(async (req, res) => {
    const { id, title, content } = req.body;

    if (!id || !title || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const note = await Blog.create({ userId: id, title, content });

    if (note) {
        return res.status(201).json({ message: "New blog created" });
    } else {
        return res.status(400).json({ message: "Invalid note data received" });
    }
});

export const updateBlog = asyncHandler(async (req, res) => {
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

export const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.status(400).json({ message: 'Blog not found' });
    }

    const result = await blog.deleteOne();

    const reply = `Note '${result.title}' with ID ${result._id} deleted`;

    res.json(reply);
});
