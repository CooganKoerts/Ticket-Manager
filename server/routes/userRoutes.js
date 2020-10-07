const express = require('express');
const User = require('../models/user');
const { handleErrors } = require('../errors/handleErrors');
const { createToken } = require('../helpers/createToken');

const { TOKEN_MAX_AGE } = process.env;

const router = express.Router();

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, userName, password } = req.body;
    const path = '/register';
    console.log(path);

    try {
        const user = await User.create({ firstName, lastName, email, userName, password });
        const token = createToken(user._id);
        console.log(`${path}: token created successfully`);
        res.cookie('access-validation-id', token, { http: true, maxAge: TOKEN_MAX_AGE * 1000});
        res.status(201).json({ user: user._id });
    } catch (err) {
        console.log(`${path} Error: ${err}`)
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    }
});

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    const path = '/login';
    console.log(path);

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        console.log(`${path}: token created successfully`);
        res.cookie('access-validation-id', token, { httpOnly: true, maxAge: TOKEN_MAX_AGE * 1000 });
        res.status(200).json({ user: user });
    } catch (err) {
        console.log(`${path} Error: ${err}`)
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
});

module.exports = router;