const express = require('express');
const router = express.Router();

const measurements = [
    { id: 1, name: 'first measurement' },
    { id: 1, name: 'first measurement' },
    { id: 1, name: 'first measurement' }
]

router.get('/', (req, res) => {
    res.send(measurements).status(200);
})

module.exports = router;