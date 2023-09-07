import asyncHandler from "express-async-handler";
import Blog from "../models/Blog.js";
/** 
** @access Public
** @desc Get all blogs (10 blogs per page)
** @method GET
** @path http://localhost:3500/blog?
** @query
**  page=1&limit=10
**  sort=latest&limit=10
**  sort=random&limit=10
**  sort=top&page=1&limit=10
*/
export const getAllBlogs = asyncHandler(async (req, res) => {
    const { page, newest, random, limit, sort } = req.query;
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

    return res.status(200).json({
        blogs,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
    });
});


/** 
** @access Public
** @desc Get blog detail by id
** @path http://localhost:3500/blog/:id
** @method GET
** @param id
*/
export const getBlogDetail = asyncHandler(async (req, res) => {
    const blogDetail = await Blog
        .findById(req.params.id)
        .populate("userId", "username email profilePicturePath");

    if (!blogDetail) {
        return res.status(404).json({ message: "Blog not found" });
    } 

    return res.status(200).json(blogDetail);
});


/** 
** @access Public
** @desc Get category blogs
** @method GET
** @path http://localhost:3500/blog/category?
** @query name="game"&page="1"
*/
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


/** 
** @access Private
** @desc Create a new blog by user
** @method POST
** @path http://localhost:3500/blog
**/
export const createBlog = asyncHandler(async (req, res) => {
    const { userId, title, subTitle, content, category } = req.body;
    const file = req.file;
    const contents = JSON.parse(content);

    if (!file) {
        return res.sendStatus(400);
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

    if (!blogCreated) {
        return res.sendStatus(500);
    }

    return res.status(201).json({ 
        message: "Create success", 
        blogCreated 
    });
});


/** 
** @accesse Private
** @desc Update a blog by user
** @method PATCH
** @path http://localhost:3500/blog/:id
**/
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


/** 
** @access Private
** @desc Delete a blog by user
** @method DELETE
** @path http://localhost:3500/blog/:id
**/
export const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
        return res.sendStatus(404);
    }

    const deletedBlog = await blog.deleteOne();
    const reply = `Blog '${deletedBlog.title}' with ID ${deletedBlog._id} deleted`;
    return res.status(200).json(reply);
});
