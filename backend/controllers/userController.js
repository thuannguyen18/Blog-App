const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }).select("-password");
    res.status(200).json({ user });
});

const updateUser = asyncHandler(async (req, res) => {
    res.send("Update");
});

module.exports = { getUser, updateUser }