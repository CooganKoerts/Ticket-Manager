const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/register', (req, res) => {
    const { firstName, lastName, email, userName, password } = req.body;
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(userName);
    // console.log(password);
    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        userName: userName,
        password: password
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser.save()
            .then((value) => {
                console.log(value);
            });
        });
    });
});

module.exports = router;