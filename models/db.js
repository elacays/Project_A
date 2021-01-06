const mongoose = require('mongoose');
const dotenv = require('dotenv');
mongoose.Promise = require('bluebird');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected MongoDB!'))
    .catch((err) => console.log(err));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
