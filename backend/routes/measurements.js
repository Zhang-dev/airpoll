const { Measurement } = require('../modules/measurement')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const measurements = await Measurement.find();
    res.status(200).header().send(measurements);
})

module.exports = router;
