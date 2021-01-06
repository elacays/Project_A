const express = require('express');

const router = express.Router();

//Controller Çağrılıyor
const ctrlAuth = require('../controllers/authController');


router.post('/', ctrlAuth.register);


module.exports = router;