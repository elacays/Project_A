module.exports.index = function (req, res) {
    res.render('index');
}

module.exports.indexPost = function (req, res) {
    console.log(req.body);
    res.render('index');
    if (req.body.mail) {
        var User = require('../models/user');
        var newUser = new User({
            userName: req.body.userName,
            name: req.body.name,
            password: req.body.password,
            mail: req.body.mail
        });

        newUser.save(function (err) {
            if (err) {
                console.log("hata");
            }
            else {
                console.log("kullanıcı kaydedildi");
            }
        });
    }
    else {
        console.log("giriş yapılma çalışıldı.")
    }
}



