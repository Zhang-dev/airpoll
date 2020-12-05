const mongoose = require('mongoose');
const measurementsService = require('../services/measurements');
const countries = require("i18n-iso-countries");
const winston = require('winston');
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

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
    winston.info('loading measurements. Please wait...')
    try {
        let response = await measurementsService.getAllMeasurements(uri);
        if(response.statusCode===200){
            measurements = JSON.parse(response.body).results;
            measurements.forEach(m => m.country = countries.getName(m.country, "en", { select: "official" }));
            const results = await Measurement.create(measurements);
            winston.info('Data insertion completed.')
        }else{
            throw new Error("Failed in fetching data from Open AQ platform API. Please try later again.")
        }
    } catch (error) {
        winston.error(error.message, error)
    }
}


module.exports.Measurement = Measurement;
module.exports.loadAllMeasurements = loadAllMeasurements;