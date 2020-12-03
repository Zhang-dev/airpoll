const morgan = require('morgan');
const home = require('../routes/home');
const measurements = require('../routes/measurements');
const cors = require('../middlewares/cors');
const error = require('../middlewares/error');

module.exports = function (app) {
    if (app.get('env') !== 'production') {
        app.use(morgan('tiny'));
    }

    app.use(cors);
    app.use('/', home);
    app.use('/api/measurements', measurements);
    app.use(error);
}