const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Confirm data
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const duplicate = await User.findOne({ email });

    // Check Duplicate 
    if (duplicate) {
        return res.status(409).json({ message: 'This email is already exist' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Form data
    const userObj = { username, email, password: hashedPassword };
    const user = await User.create(userObj);
    if (user) {
        res.status(201).json({ message: `New user ${username} created` });
    } else {
        res.status(400).json({ message: 'Invalid user data received' });
    }
});

const login = asyncHandler(async (req, res) => {
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
                    "email": user.email
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        );     

        const refreshToken = jwt.sign(
            { email: user.email },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        );

        // Create secure cookie with refresh token 
        res.cookie('jwt', refreshToken, {
            httpOnly: true, // accessible only by web server 
            secure: false, // https - set true when deploy
            sameSite: 'None', // cross-site cookie 
            maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiry: set to match rT
        });

        res.status(200).json({ accessToken });
    }
});

const refresh = (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' });

    const refreshToken = cookies.jwt;

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' });

            const user = await User.findOne({ email: decoded.email });

            if (!user) return res.status(401).json({ message: 'Unauthorized' });

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "id": user._id,
                        "username": user.username,
                        "email": user.email
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            );

            res.json({ accessToken });
        })
    );
}

const logout = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    res.clearCookie('jwt', { 
        httpOnly: true, 
        sameSite: 'None', 
        secure: true }
    );
    res.json({ message: 'Cookie cleared' });
}

module.exports = {
    register,
    login,
    refresh,
    logout
}