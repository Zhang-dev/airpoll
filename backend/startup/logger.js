const winston = require('winston');

module.exports = function () {
    const files = new winston.transports.File({ filename: 'error.log', level: 'error' });
    const console = new winston.transports.Console();

    winston.add(console);
    winston.add(files);
    winston.exceptions.handle(console);
    winston.exceptions.handle(files); process.on('unhandledRejection', error => { throw error });
}
