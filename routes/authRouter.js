const express = require('express');

const router = express.Router();

//Controller Çağrılıyor
const { login, logout, register } = require('../controllers/authController');


router.post('/', register);
router.post('/login', login);
router.get('/logout', logout);



module.exports = router;