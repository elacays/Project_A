var routeIndex = require('./indexRouter');
var routeRules = require('./rulesRouter');
var routeTest = require('./testRouter');

//fonksiyonla app.js de çağırılıyor.
module.exports = function (app) {
    app.use('/', routeIndex);
    app.use('/rules', routeRules);
    app.use('/test', routeTest);
}