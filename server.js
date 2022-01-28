const express = require('express')
const mongoose = require('mongoose')
const Proposal = require('./models/proposals')

const app = express()
app.use(express.json())

const dbURI = 'mongodb+srv://admin:cxAGT3NDBdrJnKrR@vcc-database.00sva.mongodb.net/proposalsDB?retryWrites=true&w=majority'
mongoose.connect(dbURI).then(response => {
    app.listen(4000)
})

app.get('/', (req, res) => {
    res.sendStatus(200).send('it\'s working')
})

app.get('/proposals-list', (req, res) => {
    Proposal.find().then(response => {
        res.send(response)
    })
})

app.post('/proposals-new', (req, res) => {
    const proposal = new Proposal(req.body)
    console.log(proposal)
    proposal.save().then(response => {
        res.sendStatus(200)
    })
})

app.post('/proposals-modify', (req, res) => {
    Proposal.findOneAndUpdate({name: 'Proposal 9'}, {name: 'Something nice'}).then(response => {
        res.sendStatus(200)
    })
})
