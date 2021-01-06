const { loginValidation } = require('../models/validation')
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


module.exports.index = function (req, res) {
    res.render('index');
}

//!!!--------Login--------!!!
module.exports.login = async function (req, res) {
    res.render('index');


    //Kullanıcı Giriş yapmadan girilen değerleri doğrulama
    const { error } = loginValidation(req.body);
    if (error) return console.log(error.details[0].message);

    //Kullanıcı Kayıtlımı
    const user = await User.findOne({ mail: req.body.mail });
    if (!user) return console.log('Email or Password is wrong');

    //Şifre-mail doğrulama
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return console.log("Invalid Password");

    //Giriş Tokeni oluşturma
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    //token ismiyle işlem yapılıyor
    //res.header('auth-token', token);
    console.log(token);


}