import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";


/** 
*    @desc Get all blogs (10 blogs per page)
*    @method GET
*    @path http://localhost:3500/blog
*    @query
*       ?page=1&limit=10
*       ?sort=latest&limit=10
*       ?sort=random&limit=10
*       ?sort=top&page=1&limit=10
*/
export const getAllBlogs = asyncHandler(async (req, res) => {
    const { page, newest, random, limit, sort } = req.query;
    let blogs;
    let sortBy;

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

    res.status(200).json({
        blogs,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
    });
});


/** 
*    @desc Get one blog
*    @path http://localhost:3500/blog
*    @method GET
*    @param /:id
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
        .limit(limit * 1)
        .skip((page - 1) * limit);

    res.status(200).json(comments);
});


/** 
* @desc Get category blogs
* @method GET
* @path http://localhost:3500/blog/category
* @query ?name="game"&page="1"
*/
export const getCategoryBlogs = asyncHandler(async (req, res) => {
    const { name, page } = req.query;

    const blogs = await Blog
        .find({ category: name })
        .populate("userId", "_id username profilePicturePath")
        .limit(10)
        .skip((page - 1) * 10);
    const count = await Blog.count();

    res.status(200).json({
        blogs,
        totalPages: Math.ceil(count / 10),
        currentPage: page,
    });
});


/** 
** @desc Create a new blog
** @method POST
** @path http://localhost:3500/blog
**/
export const createBlog = asyncHandler(async (req, res) => {
    const { userId, title, subTitle, content, category } = req.body;
    const file = req.file;
    const contents = JSON.parse(content);

    if (!file) {
        return res.json("nhu cc")
    }

    const blogData = {
        userId,
        title,
        subTitle,
        content: contents.map(content => content.data.text).join("\n"),
        picturePath: file.path.slice(14),
        category,
        draftContents: contents,
    }

    const blogCreated = await Blog.create(blogData);

    return res.status(201).json({ 
        message: "Created blog successfully", 
        blogCreated 
    });
});


/** 
** @desc Update a blog
** @method PATCH
** @path http://localhost:3500/blog/:id
**/
export const updateBlog = asyncHandler(async (req, res) => {
    const { userId, blogId, title, subTitle, content, category } = req.body;
    const file = req.file;
    const contents = JSON.parse(content);
    const blog = await Blog.findById(blogId);

    if (!blog) {
        return res.status(400).json("Blog not found");
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


/** 
** @desc Delete a blog
** @method DELETE
** @path http://localhost:3500/blog/:id
**/
export const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.status(400).json({ message: "Blog not found" });
    }

    const deletedBlog = await blog.deleteOne();
    const reply = `Blog '${deletedBlog.title}' with ID ${deletedBlog._id} deleted`;

    return res.status(200).json(reply);
});
