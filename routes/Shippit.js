const express = require('express')
const router = express.Router()

const envURL = (env) => {
    if(env == 'staging'){ return 'https://app.staging.shippit.com/api/3'}
    else { return 'https://app.shippit.com/api/3' }
}

router.post('/merchant', async (req,res) => {
    const url = envURL(req.body.environment)
    const response = await fetch(`${url}/merchant`, {method: 'GET', mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${req.body.apiKey}`,
            'user-agent': 'node Fetch',
            'x-shippit-platform': 'Shippit Support Black Ops'}
        }).then((res) => res.json())
    res.send(response)
})

router.post('/order/delete', async (req,res) => {
    const url = envURL(req.body.environment)
    const response = await fetch(`${url}/orders/${req.body.order}`, {method: 'DELETE', mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${req.body.apiKey}`,
            'user-agent': 'node Fetch',
            'x-shippit-platform': 'Shippit Support Black Ops'}
        }).then((res) => res.json())

    res.send(response)
})

module.exports = router