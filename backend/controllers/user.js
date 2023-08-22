import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Blog from "../models/Blog.js";

export const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const userBlog = await Blog
        .find({ userId: req.params.id })
        .select("-content -comments -category");

    res.status(200).json({ user, userBlog });
});

export const getUserBlog = asyncHandler(async (req, res) => {
    const userBlog = await Blog
        .find({ userId: req.params.id })
        .select("-content -comments -category");

    if (userBlog.length === 0)
        return res.status(200).json([]);

    res.status(200).json(userBlog);
});

export const updateUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    if (username && email) {
        user.username = username;
        user.email = email;
    }

    if (password) {
        user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    res.status(200).json({ message: "Update success" });
});


export const uploadFile = asyncHandler(async (req, res) => {
    const { avatar } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    user.profilePictureURL = avatar;

    await user.save();

    res.json({ message: "Successfully uploaded files", file: user.profilePictureURL });
});