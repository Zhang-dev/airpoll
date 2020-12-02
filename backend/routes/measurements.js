const { Measurement, loadAllMeasurements } = require('../modules/measurement')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let measurements;
    try {
        measurements = await Measurement.find();
    } catch (error) {
        console.log('Can not find measurements', error)
    }
    res.status(200).header().send(measurements);
})

router.get('/removeAll', async (req, res) => {
    let result;
    try {
        result = await Measurement.deleteMany({});
    } catch (error) {
        console.log('Can not find measurements', error)
    }
    res.status(200).header().send(result);
})

module.exports = router;
