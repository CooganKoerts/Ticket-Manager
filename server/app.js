const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const ticketRoutes = require('./routes/ticketRoutes');

const Ticket = require('./models/ticket');

const app = express();
const dbURI = process.env.DB_URI;


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.use('/', ticketRoutes);
