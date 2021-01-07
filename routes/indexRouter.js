const express = require('express')

const router = express.Router();

//indexController Çağrılıyor
const ctrlIndex = require('../controllers/indexController');


router.get('/', ctrlIndex.index);
router.post('/', ctrlIndex.login);
router.get('/logout', ctrlIndex.logout);

module.exports = router;