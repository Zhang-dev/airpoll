const request = require('request');

let options = {
  headers: { 'user-agent': 'node.js' }
};

const getAllMeasurements = function (uri) {
  return new Promise((resolve, reject) => {
    request(uri, options, (error, response, body) => {
      return resolve(response);
    });
  });
};

module.exports.getAllMeasurements = getAllMeasurements;