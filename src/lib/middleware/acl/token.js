'use strict';
const jwt = require('jsonwebtoken');

const validate = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({
            status: 401,
            error: 'Unauthorized',
        });
    }

    try {
        const token_verification = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = {
            id: token_verification.id,
        };
        next();
    } catch (err) {
        return res.status(401).json({
            status: 401,
            error: 'Unauthorized',
        });
    }
};

const generate = (userId) => {
    return jwt.sign({ id: userId }, process.env.TOKEN_SECRET);
};

module.exports = {
    validate,
    generate,
};
