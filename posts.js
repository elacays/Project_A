const router = require('express').Router();
const veriyyy = require('./controllers/verifyToken');
router.get('/', veriyyy, (req, res) => {
    res.json({
        posts: { title: 'asdsadsa', dede: "fdsfdsfds" }
    });
});

module.exports = router;