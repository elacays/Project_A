const User = require('../models/user');
const { registerValidation } = require('../models/validation')
const bcrypt = require('bcryptjs');


//!!!--------Register--------!!!
module.exports.register = async function (req, res) {

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
        res.send(savedUser);

    } catch (err) {
        res.status(400).send(err);
    }


    res.render('index');
}


