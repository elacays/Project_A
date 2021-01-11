const express = require('express')

const router = express.Router();

//indexController Çağrılıyor
const { index } = require('../controllers/indexController');


router.get('/', index);


module.exports = router;