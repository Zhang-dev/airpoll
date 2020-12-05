const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = function () {
    const dbUrl = config.get('db.url');

    mongoose
        .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            winston.info(`Connected to ${dbUrl}.`);
        })
}
