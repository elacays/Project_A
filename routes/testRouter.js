const express = require('express')

const router = express.Router();

const { index } = require('../controllers/testController');

router.get('/', index);

module.exports = router;