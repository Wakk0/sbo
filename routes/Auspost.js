const express = require('express')
const router = express.Router()

router.post('/accountinfo', async (req,res) => {
    const response = await fetch(`https://digitalapi.auspost.com.au/shipping/v1/accounts/${req.body.acc}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Account-Number': req.body.acc,
          'Content-Type': 'application/json',
          'Authorization': `Basic ${req.body.bearer}`,
          'user-agent': 'JS Fetch',
          'x-shippit-platform': 'Shippit Support Black Ops'
        }
      }).then((res) => res.json())
      res.send(response)
})

router.post('/quote', async (req,res) => {

  const response = await fetch(`https://digitalapi.auspost.com.au/shipping/v1/prices/shipments`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Account-Number': req.body.acc,
        'Content-Type': 'application/json',
        'Authorization': `Basic ${req.body.bearer}`,
        'user-agent': 'JS Fetch',
        'x-shippit-platform': 'Shippit Support Black Ops'
      }, body: JSON.stringify(req.body.parcels)
    }).then((res) => res.json())
    res.send(response)
})

module.exports = router