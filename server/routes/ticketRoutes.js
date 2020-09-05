const express = require('express');
const Ticket = require('../models/ticket');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Tickets');
    Ticket.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(err);
        })
});

router.post('/', (req, res) => {
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

router.get('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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