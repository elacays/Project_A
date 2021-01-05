// server.js
var express = require('express');
var app = express();
var port = 8080;
var path = require('path');

var db = require('./models/db');
var ejsLayouts = require("express-ejs-layouts")
var bodyparser = require('body-parser');






// start the server
app.listen(port, function () {
    console.log('app started');
});
//sayfa modülleri için ejsLayouts eklendi.
app.use(ejsLayouts);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


//ejs modülünü kullanma
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));


//router modülü çağrılıp direk çalıştırılıyor
require('./routes/router')(app);

// route our app
app.use('/public', express.static(__dirname + '/public'));




