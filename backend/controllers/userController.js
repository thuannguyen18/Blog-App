const asyncHandler = require('express-async-handler');
const bcrypt = require("bcrypt");
const User = require('../models/User');

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ user });
});

const updateUser = asyncHandler(async (req, res) => {
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


const uploadFile = asyncHandler(async (req, res) => {
    const { avatar } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    user.profilePictureURL = avatar;

    await user.save();

    res.json({ message: "Successfully uploaded files" });
});

module.exports = { getUser, updateUser, uploadFile }