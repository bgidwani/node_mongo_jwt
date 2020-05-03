'use strict';

const { validateSignup, validateLogin } = require('./lib/validations');
const { encryptPassword, comparePassword } = require('./lib/password-hasher');
const User = require('../models/User');
const acl = require('../middleware/acl');

// Signup user
const signup = async (req, res) => {
    const { error } = validateSignup(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const encryptedPassword = await encryptPassword(req.body.password);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword,
    });

    try {
        await user.save();

        res.status(201).send({
            message: 'User Registered',
            user: user._id,
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Login
const login = async (req, res) => {
    const logindata = req.body;
    const { error } = validateLogin(logindata);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: logindata.email });
    if (!user) {
        return res.status(400).send('Invalid user');
    }

    const isvalidPassword = await comparePassword(
        logindata.password,
        user.password
    );
    if (!isvalidPassword) {
        return res.status(400).send('Invalid credentials');
    }

    var token = acl.token.generate(user._id);
    res.status(200).send({
        token: token,
        message: 'Success',
    });
};

module.exports = {
    signup,
    login,
};
