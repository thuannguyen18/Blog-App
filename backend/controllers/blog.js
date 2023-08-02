import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import User from "../models/User.js";

/*  @desc: Get all blogs 
    @method: GET
    @route: /blogs
    @params: 
        ?page=""&limit=""
        ?newest=""&limit="" 
        ?random=""&limit="" 
*/
export const getAllBlogs = asyncHandler(async (req, res) => {
    const { page, newest, random, limit } = req.query;
    let blogs;

    if (newest) {
        blogs = await Blog
            .find()
            .populate("userId", "-password -followers -email")
            .limit(limit * 1);
    } else if (random) {
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
    } else {
        blogs = await Blog
            .find()
            .populate("userId", "-password -followers -email")
            .limit(limit * 1)
            .skip((page - 1) * limit);
    }
    
    const count = await Blog.count();

    res.status(200).json({ 
        blogs,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
    });
});

export const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id).select("-user_id").populate("user_id");

    if (!blog) {
        return res.status(400).json({ message: "Blog not found" });
    }

    res.status(200).json({ blog });
});

export const createBlog = asyncHandler(async (req, res) => {
    const { id, title, content } = req.body;

    if (!id || !title || !content) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const note = await Blog.create({ user_id: id, title, content });

    const user = await User.findById(id);
    user.blogs.push(note);
    await user.save();

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