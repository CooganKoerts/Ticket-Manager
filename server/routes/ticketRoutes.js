const express = require('express');
const Ticket = require('../models/ticket');

const router = express.Router();

const path = '/ticket';

router.get('/', (req, res) => {
    console.log(`${path} GET`);

    Ticket.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(`${path} GET Error: ${err}`);
        })
});

router.post('/', (req, res) => {
    const ticket = new Ticket(req.body);
    console.log(`${path} POST`);

    ticket.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(`${path} POST Error: ${err}`);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${path}/:id GET`)

    Ticket.findById(id)
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            // TODO create error response & code
            console.log(`${path}/:id GET Error: ${err}`);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${path}/:id DELETE`)

    Ticket.findByIdAndDelete(id)
        .then(result => {
            res.statusCode = 200;
            res.send('Ticket successfully deleted!');
        })
        .catch(err => {
            // TODO create error response & code
            console.log(`${path}/:id DELETE Error: ${err}`);
        });
});

module.exports = router;