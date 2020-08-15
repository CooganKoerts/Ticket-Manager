const express = require('express');
const Ticket = require('../models/ticket');

const router = express.Router();

router.get('/tickets', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    Ticket.find().sort({ createdAt: -1 })
        .then((result) => {
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;