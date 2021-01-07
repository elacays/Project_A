const { loginValidation } = require('../models/validation')
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

let a;


const index = function (req, res) {

    res.render('index', { a });
}

//!!!--------Login--------!!!
const login = async function (req, res,) {
    //Kullanıcı Giriş yapmadan girilen değerleri doğrulama
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Kullanıcı Kayıtlımı
    const user = await User.findOne({ mail: req.body.mail });
    if (!user) return res.status(400).send('Email or Password is wrong')

    //Şifre-mail doğrulama
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Email or Password is wrong')

    //Giriş Tokeni oluşturma
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

    //token ismiyle işlem yapılıyor
    res.cookie('token', token, { maxAge: 900000, httpOnly: true });
    a = true

    res.redirect('/');
}

const logout = async function (req, res) {

    const logout = res.clearCookie('token');
    a = undefined;
    res.redirect('/');

    return logout;

}

module.exports = { logout, login, index }