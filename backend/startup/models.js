const { loadAllMeasurements } = require('../models/measurement');
const config = require('config');

module.exports = function () {
    const datasourceUrl = config.get('datasource.url');
    loadAllMeasurements(datasourceUrl);
}