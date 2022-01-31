require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Proposal = require('./models/proposals')

const app = express()
app.use(express.json())

mongoose.connect(process.env.DB_URI).then(response => {
    app.listen(process.env.SERVER_PORT)
})

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/proposals-list', (req, res) => {
    Proposal.find().then(response => {
        res.send(response)
    })
})

app.post('/proposals-new', (req, res) => {
    const proposal = new Proposal(req.body)
    proposal.save().then(() => {
        res.sendStatus(200)
    })
})

app.post('/proposals-modify', (req, res) => {
    Proposal.findOneAndUpdate(req.body[0], req.body[1]).then(() => {
        res.sendStatus(200)
    })
})
