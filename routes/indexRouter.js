var express = require('express')

var router = express.Router();

//indexController Çağrılıyor
var ctrlIndex = require('../controllers/indexController');


router.get('/', ctrlIndex.index);
router.post('/', ctrlIndex.indexPost);

module.exports = router;