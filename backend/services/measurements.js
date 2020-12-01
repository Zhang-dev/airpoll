const request = require('request');

const getAllMeasurements = function(options) {
    return new Promise((resolve,reject) => {
      request('https://api.openaq.org/v1/measurements', (error, response, body) => {
        if (response) {
          return resolve(response);
        }
        if (error) {
          return reject(error);
        }
      });
    });
  };


module.exports.getAllMeasurements = getAllMeasurements;