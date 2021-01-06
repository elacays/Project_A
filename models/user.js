var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//kullanıcının Şeması
var userSchema = new Schema({
    name: { type: String, required: true, unique: true, min: 3, max: 255 },
    password: { type: String, required: true, min: 6, max: 1024 },
    mail: { type: String, required: true, unique: true, min: 6, max: 255 },
    date: { type: Date, default: Date.now }

});

const User = mongoose.model('User', userSchema);

module.exports = User;