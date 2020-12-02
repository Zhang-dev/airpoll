const mongoose = require('mongoose');
const express = require('express');
const config = require('config');
const morgan = require('morgan');
const cors = require('./middlewares/cors');
const home = require('./routes/home');
const measurements = require('./routes/measurements');
const { loadAllMeasurements } = require('./modules/measurement');
const app = express();

const dbUser = config.get('db.user');
const dbPassword = config.get('db.password');
const dbName = config.get('db.name');
const datasourceUrl = config.get('datasource.url');

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster-airpoll.sehtq.mongodb.net/${dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection succeeded.');
        loadAllMeasurements(datasourceUrl);
    })
    .catch(err => {
        console.error('MongoDB connection failed.', err);
    })


if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}
app.use(cors);
app.use('/', home);
app.use('/api/measurements', measurements);


const port = process.env.PORT || 9000;
app.listen(port, () => { console.log(`listening on port ${port}`) });