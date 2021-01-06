const User = require('../models/user');
const { registerValidation } = require('../models/validation')
const bcrypt = require('bcryptjs');


//!!!--------Register--------!!!
module.exports.register = async function (req, res) {
    res.render('index');
    //Kullanıcı Oluşturmadan girilen değerleri doğrulama
    const { error } = registerValidation(req.body);
    if (error) return console.log(error.details[0].message);

    //Kullanıcı Kayıtlımı
    const emailExist = await User.findOne({ mail: req.body.mail });
    if (emailExist) return console.log('User already exist');

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
        await user.save();
        console.log("kullanıcı kaydedildi");

    } catch (err) {
        console.log(err);
    }

}


