const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');
const { loadAllMeasurements } = require('../modules/measurement');

module.exports = function () {
    const dbUser = config.get('db.user');
    const dbPassword = config.get('db.password');
    const dbName = config.get('db.name');
    const datasourceUrl = config.get('datasource.url');

    mongoose
        .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster-airpoll.sehtq.mongodb.net/${dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            winston.info('MongoDB connection succeeded.');
            loadAllMeasurements(datasourceUrl);
        })
}
