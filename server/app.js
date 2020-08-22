const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const ticketRoutes = require('./routes/ticketRoutes');

const app = express();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    console.log(req.path);
    next();
})

app.use('/', ticketRoutes);
