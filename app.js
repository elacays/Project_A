// server.js
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./models/db');
const ejsLayouts = require("express-ejs-layouts")
const bodyparser = require('body-parser');





// start the server
app.listen(port, function () {
    console.log('app started');
});
//sayfa modülleri için ejsLayouts eklendi.
app.use(ejsLayouts);
app.use(cookieParser());

//verinin işe yarar kısmını kullanabilmek için body parser kullanılıyor
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.get('*', function (req, res, next) {
    res.locals.user = req.cookies.token;
    next();
});




//ejs modülünü kullanma
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));



//router modülü çağrılıp direk çalıştırılıyor
require('./routes/router')(app);

// route our app
app.use('/public', express.static(__dirname + '/public'));




