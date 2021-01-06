const express = require('express')

const router = express.Router();

const ctrlTest = require('../controllers/testController');

router.get('/', ctrlTest.index);

module.exports = router;