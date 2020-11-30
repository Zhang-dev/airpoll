const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hellp world!').status(200);
});

module.exports = router;