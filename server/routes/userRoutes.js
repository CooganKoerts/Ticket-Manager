const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/register', (req, res) => {
    const { firstName, lastName, email, userName, password } = req.body;

    // TODO: make sure passwords match when creating a user
    User.findOne({ email: email }).exec((err, user) => {
        if (user) { 
            res.statusCode = 403;
            res.send('That email has already been registered!');
        } else {
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
                        res.statusCode = 200;
                        res.send('Account successfully registered!')
                    }).catch((err) => {
                        res.statusCode = 500;
                        res.send('Oops! Something went wrong.')
                    });
                });
            });
        }
    })
});

module.exports = router;