var express = require('express')

var router = express.Router();

var ctrlTest = require('../controllers/testController');

router.get('/', ctrlTest.index);

module.exports = router;