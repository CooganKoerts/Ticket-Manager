const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { requireAuth } = require('./middleware/authMiddleware');
const morgan = require('morgan');
const dotenv = require('dotenv').config();

const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(`mongoDB: ${err}`));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', userRoutes);
app.use('/', requireAuth, (req, res, next) => {
    app.use(ticketRoutes);
    app.use(projectRoutes);
    next();
});
