const express = require('express');
const Project = require('../models/project');

const router = express.Router();

const path = '/project'

router.get('/', (req, res) => {
    console.log(`${path} GET`);

    Project.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            // TODO create error response & code
            console.log(`${path} GET Error: ${err}`);
        })
});

router.post('/', (req, res) => {
    const project = new Ticket(req.body);
    console.log(`${path} POST`);

    project.save()
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

    Project.findById(id)
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

    Project.findByIdAndDelete(id)
        .then(result => {
            res.statusCode = 200;
            res.send('Project successfully deleted!');
        })
        .catch(err => {
            // TODO create error response & code
            console.log(`${path}/:id DELETE Error: ${err}`);
        });
});
