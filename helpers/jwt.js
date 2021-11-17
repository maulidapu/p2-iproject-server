if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRETKEY;

exports.generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        role: user.role
    }, secretKey);
}

exports.verify = (token) => {
    return jwt.verify(token, secretKey);
}