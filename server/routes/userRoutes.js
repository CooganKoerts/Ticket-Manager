const express = require('express');
const { registerPost, loginPost } = require('../controllers/user');

const router = express.Router();

router.post('/register', registerPost);
router.post('/login', loginPost);

module.exports = router;