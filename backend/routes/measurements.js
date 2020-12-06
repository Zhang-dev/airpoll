const { Measurement } = require('../models/measurement')
const express = require('express');
const router = express.Router();

const getAll = async (req, res, next) => {
    let measurements = await Measurement.find();
    res.status(200).header().send(measurements);
}

const removeAll = async (req, res) => {
    let result = await Measurement.deleteMany({});
    res.status(200).header().send(result);
}

router.get('/', getAll)
router.get('/removeAll', removeAll)

module.exports.measurements = router;
module.exports.getAll = getAll;
