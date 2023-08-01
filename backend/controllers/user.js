import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/User.js";

export const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ user });
});

export const getUserBlog = asyncHandler(async (req, res) => {
    const userBlog = await User.findById(req.params.id).populate("blogs");
    res.json(userBlog);
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