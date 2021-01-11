const User = require('../models/user');
const { registerValidation, loginValidation } = require('../models/validation')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



//!!!--------Register--------!!!
const register = async function (req, res) {

    //Kullanıcı Oluşturmadan girilen değerleri doğrulama
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Kullanıcı Kayıtlımı
    const emailExist = await User.findOne({ mail: req.body.mail });
    if (emailExist) return res.status(400).send('User Already Exist!');

    //şifreyi Hashleme
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Kullanıcı Oluşturma
    const user = new User({
        name: req.body.name,
        password: hashedPassword,
        mail: req.body.mail
    });
    try {
        const savedUser = await user.save();
        console.log(req.body.name + " Kullanıcısı Kaydedildi.")
        //res.send(savedUser);

    } catch (err) {
        res.status(400).send(err);
    }


    res.redirect('/');
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
    res.redirect('/');
}

const logout = async function (req, res) {

    const logout = res.clearCookie('token');
    res.redirect('/');
    return logout;

}
module.exports = { register, login, logout }
