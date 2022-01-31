const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proposalsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    start_date: {
        type: String,
        required: true,
    },
    end_date: {
        type: String,
        required: true,
    },
})

const Proposal = mongoose.model('Proposal', proposalsSchema)

module.exports = Proposal
