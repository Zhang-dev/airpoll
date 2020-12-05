const express = require('express');
const app = express();

require('./startup/logger')();
require('./startup/db')();
require('./startup/models')();
require('./startup/routes')(app);

const port = process.env.PORT || 9000;
const server = app.listen(port, () => { console.log(`listening on port ${port}`) });

module.exports = server;