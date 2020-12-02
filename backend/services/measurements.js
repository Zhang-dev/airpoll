const request = require('request');

const getAllMeasurements = function(uri) {
    return new Promise((resolve,reject) => {
      request(uri, (error, response, body) => {
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