const express = require('express')

const router = express.Router();

//indexController Çağrılıyor
const { login, logout, index } = require('../controllers/indexController');


router.get('/', index);
router.post('/', login,);
router.get('/logout', logout);

module.exports = router;