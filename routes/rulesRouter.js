var express = require('express')

var router = express.Router();

var ctrlRules = require('../controllers/rulesController');

router.get('/', ctrlRules.index);

module.exports = router;