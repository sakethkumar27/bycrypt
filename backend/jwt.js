const jwt = require('jsonwebtoken');

const SECRET_KEY = "secretkey";
console.log("middleware code is running")

module.exports = function(req, res, next) {
    try {
        const token = req.header('x-token');
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }

      let decode=jwt.verify(token, SECRET_KEY)
          
            req.user = decode.user;
            next();
     
    } catch (err) {
        res.status(500).json({ err: 'Internal Server Error' });
    }
}
