const jwt = require('jsonwebtoken');

const SECRET_KEY = "secretkey";
console.log("middleware code is running")

module.exports = function(req, res, next) {
    try {
        const token = req.header('x-token');
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }

        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            req.userId = decoded.userId;
            next();
        });
    } catch (err) {
        res.status(500).json({ err: 'Internal Server Error' });
    }
};
