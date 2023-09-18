import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import Blog from "../models/Blog.js";

export const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id).select("-password");

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const userBlog = await Blog
        .find({ userId: id })
        .select("-content -comments -category");

    return res.status(200).json({ user, userBlog });
});

export const getUserBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const userBlogs = await Blog
        .find({ userId: id })
        .select("-content -comments -category");

    if (userBlogs.length === 0) {
        return res.status(200).json([]);
    }

    return res.status(200).json(userBlogs);
});

export const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    const file = req.file;

    const user = await User.findById(id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }


    if (!file) {
        user.profilePicturePath = user.profilePicturePath;
        user.username = username;
        user.email = email;

        await user.save();
        return res.sendStatus(200);
    }

    user.username = req.body.username;
    user.email = req.body.email;
    user.profilePicturePath = file.path.slice(14);

    await user.save();
    return res.sendStatus(200);
});

export const changePassword = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { password, newPassword, confirmNewPassword } = req.body;

    const user = await User.findById(id);
    const hashedPassword = (newPassword === confirmNewPassword) && await bcrypt.hash(confirmNewPassword, 10);
    const match = bcrypt.compare(password, user.password);

    if (match) {
        user.password = hashedPassword;
        await user.save();
        return res.status(200).json("Change password success");
    }
});


export const uploadFile = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { avatar } = req.body;

    const user = await User.findById(id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    user.profilePictureURL = avatar;

    await user.save();

    return res.json({
        message: "Successfully uploaded files",
        file: user.profilePictureURL
    });
});

export const followUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId= req.userId;

    const userIsFollowed = await User.findById(id);
    const userWantToFollow = await User.findById(userId);

    if (!userIsFollowed || !userWantToFollow) {
        return res.status(404).json("User not found");
    }

    if (userWantToFollow.following.indexOf(id) === -1) {
        userWantToFollow.following.push(id);
        await userWantToFollow.save();
    }

    if (userIsFollowed.followers.indexOf(userId) === -1) {
        userIsFollowed.followers.push(userId);
        userIsFollowed.isFollowing = true;
        await userIsFollowed.save();
    }
    
    return res.status(200).json("Follow success");
});

export const unfollowUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.userId;

    const userWantToUnfollow = await User.findById(userId);
    const userIsFollowed = await User.findById(id);
    
    if (!userIsFollowed || !userWantToUnfollow) {
        return res.status(404).json("User not found");
    }

    userWantToUnfollow.following.remove(id);
    
    userIsFollowed.followers.remove(userId);
    userIsFollowed.isFollowing = false;

    await userWantToUnfollow.save();
    await userIsFollowed.save();
    
    return res.status(200).json("Unfollowing success");
});