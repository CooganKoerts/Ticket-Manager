const express = require('express');
const { 
    ticketGet,
    ticketPost,
    ticketIdGet,
    ticketIdDelete
} = require('../controllers/ticket');

const router = express.Router();

router.get('/ticket', ticketGet);
router.post('/ticket', ticketPost);
router.get('/ticket/:id', ticketIdGet );
router.delete('/ticket/:id', ticketIdDelete);

module.exports = router;