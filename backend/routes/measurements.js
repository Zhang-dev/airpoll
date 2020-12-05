const { Measurement } = require('../models/measurement')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let measurements = await Measurement.find();
    res.status(200).header().send(measurements);
})

router.get('/removeAll', async (req, res) => {
    let result = await Measurement.deleteMany({});
    res.status(200).header().send(result);
})

module.exports = router;
