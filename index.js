const express = require('express')
const cors = require('cors')
// const https = require('https')
const port = process.env.EXPRESS_PORT || 3000
const app = express()

app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({extended: true}))
// app.use(cors({origin: 'localhost'}))

const routesShippit = require('./routes/Shippit')
app.use('/api/shippit/', routesShippit)

const routesAuspost = require('./routes/Auspost')
app.use('/api/auspost/', routesAuspost)

app.get(/.*/,(req,res)=>res.sendFile(path.resolve(__dirname,'public/index.html')))

app.listen(port, () => { console.log(`REST API Running on http://localhost:${port}`) });