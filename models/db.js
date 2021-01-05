const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const mongoDb = 'mongodb+srv://admin:123@elacays.xldbi.mongodb.net/projectAdb?retryWrites=true&w=majority';

mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('baglantı kuruldu'))
    .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
