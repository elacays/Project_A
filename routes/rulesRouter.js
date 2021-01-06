const express = require('express')

const router = express.Router();

const ctrlRules = require('../controllers/rulesController');

router.get('/', ctrlRules.index);

module.exports = router;