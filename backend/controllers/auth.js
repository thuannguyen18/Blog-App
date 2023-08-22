import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Confirm data
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const duplicate = await User.findOne({ email });

    // Check Duplicate 
    if (duplicate) {
        return res.status(409).json({ message: "This email is already exist" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Form data
    const userObj = { username, email, password: hashedPassword };
    const user = await User.create(userObj);

    if (user) {
        res.status(201).json({ message: "Register success" });
    } else {
        res.status(400).json({ message: "Invalid user data received" });
    }
});

export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Confirm data
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check email's user
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: 'Email or password is not correct' });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(400).json({ message: "Email or password is not correct" });
    }

    if (user && match) {
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "id": user._id,
                    "username": user.username,
                    "email": user.email,
                    "profilePicturePath": user.profilePicturePath,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30m" }
        );
        res.status(200).json({ accessToken });
    }
});