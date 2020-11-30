const express = require('express');
const morgan = require('morgan');
const home = require('./routes/home')
const measurements = require('./routes/measurements')
const app = express();

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}
app.use('/', home);
app.use('/api/measurements', measurements);

const port = process.env.PORT || 9000
app.listen(port, () => { console.log(`listening on port ${port}`) })