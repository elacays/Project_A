const express = require('express')

const router = express.Router();

const { index } = require('../controllers/rulesController');

router.get('/', index);

module.exports = router;