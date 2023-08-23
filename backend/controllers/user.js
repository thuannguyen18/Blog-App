import mongoose from "mongoose";
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
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const file = req.file;

    if (!file) {
        user.profilePicturePath = user.profilePicturePath;
        user.username = req.body.username;
        user.email = req.body.email;
        await user.save();
        return res.status(200).json("Update success");
    }

    user.username = req.body.username;
    user.email = req.body.email;
    user.profilePicturePath = file.path.slice(14);

    await user.save();

    res.status(200).json("Update success");
});

export const changePassword = asyncHandler(async (req, res) => {
    const { password, newPassword, confirmNewPassword } = req.body;
    const user = await User.findById(req.params.id);
    const hashedPassword = newPassword === confirmNewPassword && await bcrypt.hash(confirmNewPassword, 10);
    const match = bcrypt.compare(password, user.password);

    if (match) {
        user.password = hashedPassword;
        await user.save();
        return res.status(200).json("Change password success");
    }
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