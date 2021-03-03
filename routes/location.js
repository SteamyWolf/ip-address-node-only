const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Location = require('../models/locationModel');

//ROUTES//
router.get('/:ip', async (req, res, next) => {
    console.log(req.params.ip)
    let response = await fetch(`http://ip-api.com/json/${req.params.ip}`);
    let data = await response.json()
    res.json(data)
})

router.post('/saveLocation', async (req, res, next) => {
    console.log(req.body);
    console.log(req.body.country)
    const location = new Location({
        ip: req.body.ip,
        country: req.body.country,
        city: req.body.country,
        region: req.body.region,
        timezone: req.body.timezone,
        organization: req.body.organization
    })
    let savedLocation = await location.save();
    res.json(savedLocation)
})

module.exports = router;