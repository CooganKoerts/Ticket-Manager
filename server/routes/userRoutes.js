const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

const handleErrors = (err) => {
    console.log('ERROR, hey there is an error');
    console.log(err);

    return { coogan: err }
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'server secret', {
        expiresIn: maxAge
    });
};

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, userName, password } = req.body;

    try {
        const user = await User.create({ firstName, lastName, email, userName, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { http: true, maxAge: maxAge * 1000});
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    }
});

router.post('/login', (req, res, next) => {
});

module.exports = router;