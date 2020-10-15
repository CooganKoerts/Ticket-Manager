const express = require('express');
const { 
    projectGet,
    projectPost,
    projectIdGet,
    projectIdDelete
} = require('../controllers/project');

const router = express.Router();

router.get('/project', projectGet);
router.post('/project', projectPost);
router.get('/project/:id', projectIdGet);
router.delete('/project/:id', projectIdDelete);

module.exports = router;