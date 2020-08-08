const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const ticketRoutes = require('./routes/ticketRoutes');

const Ticket = require('./models/ticket');

const app = express();

// TODO: hide user & pw
const dbURI = 'mongodb+srv://ticket-user:3Lhbsyq6tf1Zcq1s@cluster0.zros3.mongodb.net/ticket-manager?retryWrites=true&w=majority';


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.use('/', ticketRoutes);
