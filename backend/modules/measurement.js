const mongoose = require('mongoose');
const measurementsService = require('../services/measurements');

let measurements;

const CoordinatesSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
}, { _id: false, autoIndex: false })

const AppDateSchenma = new mongoose.Schema({
    utc: Date,
    local: Date
}, { _id: false, autoIndex: false })

const measurementSchema = new mongoose.Schema({
    city: String,
    country: String,
    location: String,
    parameter: String,
    unit: String,
    value: Number,
    coordinates: CoordinatesSchema,
    date: AppDateSchenma
})

const Measurement = mongoose.model('Measurement', measurementSchema);

async function loadAllMeasurements(uri) {
    console.log('loading measurements.')
    try {
        let response = await measurementsService.getAllMeasurements(uri);
        measurements = JSON.parse(response.body).results
        const results = await Measurement.create(measurements);
        console.log(`Results: ${results}
        Data insertion completed.`)
    } catch (error) {
        console.log(error)
    }
}


module.exports.Measurement = Measurement;
module.exports.loadAllMeasurements = loadAllMeasurements;