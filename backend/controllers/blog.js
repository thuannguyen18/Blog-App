import { unlink } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";

export const getAllBlogs = asyncHandler(async (req, res) => {
    const { page, newest, random, limit, sort, userId } = req.query;
    let blogs, sortBy;

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

    if (sort === "top") {
        sortBy = { likes: -1 };
    } else {
        sortBy = { _id: -1 };
    }

    blogs = await Blog
        .find()
        .populate("userId", "_id username profilePicturePath")
        .sort(sortBy)
        .limit(limit * 1)
        .skip((page - 1) * limit);
    const count = await Blog.count();

    const isSavedAndLiked = blogs.map(blog => {
        const isSaved = blog.saves.some(id => id.toString() === userId);
        const isLiked = blog.likes.some(id => id.toString() === userId);
        return { isSaved, isLiked };
    });

    return res.status(200).json({
        blogs,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        isSavedAndLiked
    });
});


export const getBlogDetail = asyncHandler(async (req, res) => {
    const blogDetail = await Blog
        .findById(req.params.id)
        .populate("userId", "username email profilePicturePath");

    if (!blogDetail) {
        return res.sendStatus(404);
    }

    return res.status(200).json(blogDetail);
});


export const getCategoryBlogs = asyncHandler(async (req, res) => {
    const { name, page } = req.query;

    const blogs = await Blog
        .find({ category: name })
        .populate("userId", "_id username profilePicturePath")
        .limit(10)
        .skip((page - 1) * 10);
    const count = await Blog.count();

    return res.status(200).json({
        blogs,
        totalPages: Math.ceil(count / 10),
        currentPage: page,
    });
});


export const createBlog = asyncHandler(async (req, res) => {
    const { userId, title, subTitle, content, category } = req.body;
    const contents = JSON.parse(content);
    const file = req.file;

    let picturePath;
    if (!file) {
        picturePath = "blog-default.jpg";
    } else {
        picturePath = file.path.slice(14);
    }

    const blogData = {
        userId,
        title,
        subTitle,
        content: contents.map(content => content.data.text).join("\n"),
        picturePath,
        category,
        draftContents: contents,
    }

    const blogCreated = await Blog.create(blogData);

    if (!blogCreated) {
        return res.sendStatus(500);
    }

    return res.status(201).json({
        message: "Create success",
        blogCreated
    });
});


export const updateBlog = asyncHandler(async (req, res) => {
    const { userId, title, subTitle, content, category } = req.body;
    const file = req.file;
    const contents = JSON.parse(content);
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.sendStatus(404);
    }

    if (!file) {
        blog.picturePath = blog.picturePath;
    } else {
        blog.picturePath = file.path.slice(14);
    }

    blog.userId = userId;
    blog.title = title;
    blog.subTitle = subTitle;
    blog.content = contents.map(content => content.data.text).join("\n");
    blog.category = category;
    blog.draftContents = contents;
    await blog.save();

    return res.status(200).json({
        message: "Update success",
        blogUpdated: blog
    });
});


export const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    // Read file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, `../public/assets/${blog.picturePath}`);

    if (!blog) {
        return res.sendStatus(404);
    }

    if (blog.picturePath !== "blog-default.jpg") {
        // Delete file
        await unlink(filePath);
    }

    await blog.deleteOne();
    return res.sendStatus(200);
});


export const likeBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
        return res.sendStatus(404);
    }

    // if user liked it then unlike it
    if (blog.likes.includes(req.userId)) {
        blog.likes = blog.likes.filter(id =>
            id.toString() !== req.userId
        );
        await blog.save();

        return res.sendStatus(200);
    }

    blog.likes.push(req.userId);
    await blog.save();

    return res.sendStatus(200);
});