import { unlink } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Blog from "../models/Blog.js";

export const getAuthor = asyncHandler(async (req, res) => {
    const { authorId } = req.params;
    const { userId } = req.query;
    const author = await User.findById(authorId).select("-password");
    const isFollowing = author.followers.some(id => id.toString() === userId);
    const authorBlogs = await Blog
        .find({ userId: authorId })
        .select("-content -comments -category");

    return res.status(200).json({
        author,
        authorBlogs,
        isFollowing,
        userId
    });
});

export const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.userId);
    const userBlogs = await Blog.find({ userId: req.userId })
        .select("-content -comments -category");

    return res.status(200).json({
        userBlogs,
        followers: user.followers.length,
        following: user.following.length,
    });
});

export const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    const file = req.file;
    const user = await User.findById(id);
    // Read file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    
    if (!user) {
        return res.sendStatus(404);
    }

    if (!username.trim() || !email.trim()) {
        return res.sendStatus(400);
    }

    // Only update username and email
    if (!file) {
        user.username = username;
        user.email = email;
        await user.save();
        return res.sendStatus(200);
    }

    // Delete old profile picture
    if (user.profilePicturePath) {
        const filePath = path.join(__dirname, `../public/assets/${user.profilePicturePath}`);
        await unlink(filePath);
    }

    // Update user with new informations
    user.username = username;
    user.email = email;
    user.profilePicturePath = file.path.slice(14);
    await user.save();
    return res.sendStatus(200);
});

export const changePassword = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { password, newPassword, confirmNewPassword } = req.body;
    const user = await User.findById(id);
    const match = bcrypt.compare(password, user.password);

    if (newPassword !== confirmNewPassword) {
        return res.sendStatus(400);
    }

    if (match) {
        const hashedPassword = await bcrypt.hash(confirmNewPassword, 10);
        user.password = hashedPassword;
        await user.save();
        return res.sendStatus(200);
    } else {
        return res.status(400).json("Current password is not correct");
    }
});

export const followAuthor = asyncHandler(async (req, res) => {
    const { authorId } = req.params;
    const userId = req.userId;
    const author = await User.findById(authorId);
    const user = await User.findById(userId);

    if (!author || !user) {
        return res.sendStatus(404);
    }

    const isNotFollow = user.following.indexOf(authorId) === -1 &&
        author.followers.indexOf(userId) === -1;

    if (isNotFollow) {
        user.following.push(authorId);
        author.followers.push(userId);
    } else {
        user.following.remove(authorId);
        author.followers.remove(userId);
    }

    await user.save();
    await author.save();

    return res.status(200).json({
        authorFollowerCount: author.followers.length,
        userFollowingCount: user.following.length,
    });
});