const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Unauthorized day ne' });
    }

    const token = authHeader.split(' ')[1];
    
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' });
            req.user = decoded.UserInfo.username;
            req.email = decoded.UserInfo.email;
            next();
        }
    );
}

module.exports = verifyToken;