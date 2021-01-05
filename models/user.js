var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//kullanıcının Şeması
var userSchema = new Schema({
    userName: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mail: { type: String, required: true, unique: true }

});

const User = mongoose.model('User', userSchema);

module.exports = User;