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

async function loadAllMeasurements() {
    console.log('loading measurements.')

    let response = await measurementsService.getAllMeasurements();
    measurements = JSON.parse(response.body).results
    const results = await Measurement.create(measurements);
}


module.exports.Measurement = Measurement;
module.exports.loadAllMeasurements = loadAllMeasurements;