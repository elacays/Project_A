const routeIndex = require('./indexRouter');
const routeRules = require('./rulesRouter');
const routeTest = require('./testRouter');
const routeAuth = require('./authRouter');
const verifyCheck = require('../controllers/verifyToken');

//Sayfa yönlendirmeleri yapılıyor.fonksiyonla app.js de çağırılıyor.
module.exports = function (app) {
    app.use('/', routeIndex);
    app.use('/rules', routeRules);
    app.use('/test', routeTest);
    app.use('/register', routeAuth);
    app.use('/login', routeIndex);
}