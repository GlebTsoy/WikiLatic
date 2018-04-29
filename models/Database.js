const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/users';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

exports.db;
