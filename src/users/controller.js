'use strict';
const User = require('../db/models/User');

const getAll = async (req, res) => {
    var users = await User.find({}, { __v: 0, password: 0 });

    res.status(200).json(users);
};

module.exports = {
    getAll,
};
