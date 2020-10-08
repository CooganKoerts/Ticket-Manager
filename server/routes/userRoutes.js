const express = require('express');
const User = require('../models/user');
const { handleErrors } = require('../errors/handleErrors');
const { createToken } = require('../helpers/createToken');

const { TOKEN_MAX_AGE } = process.env;

const router = express.Router();

router.post('/register', async (req, res) => {
    const { firstname, lastname, email, username, password } = req.body;
    const path = '/register';
    console.log(path);

    try {
        const { _id } = await User.create({ firstname, lastname, email, username, password });
        const token = createToken(_id);
        console.log(`${path}: token created successfully`);
        res.status(201).json({ 'access-validation-id': token, user: { id: _id, firstname, lastname, username, email }});
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
        const { _id, firstname, lastname, username, email } = await User.login(email, password);
        const token = createToken(user._id);
        console.log(`${path}: token created successfully`);
        res.status(200).json({ 'access-validation-id': token, user: { id: _id, firstname, lastname, username, email }});
    } catch (err) {
        console.log(`${path} Error: ${err}`)
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
});

module.exports = router;