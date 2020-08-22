const express = require('express');
const Ticket = require('../models/ticket');

const router = express.Router();

router.get('/tickets', (req, res) => {
    Ticket.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(err);
        })
});

router.post('/tickets', (req, res) => {
    const ticket = new Ticket(req.body);

    ticket.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(err)
        })
});

router.get('/tickets/:id', (req, res) => {
    const id = req.params.id;

    Ticket.findById(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            // TODO create error response & code
            console.log(err);
        });
});

router.delete('/tickets/:id', (req, res) => {
    const id = req.params.id;

    console.log('DELETE');

    Ticket.findByIdAndDelete(id)
        .then(result => {
            res.statusCode = 200;
            res.send('Ticket successfully deleted!');
        })
        .catch(err => {
            // TODO create error response & code
            console.log(err);
        });
});

module.exports = router;