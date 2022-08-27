const mongoose = require('mongoose')

const ProjecSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    technologys: {
        type: Array,
        required: true,
    },
    github:{
        type: String,
        required:true,
    },
    live:{
        type: String,
        require: true,
    },
    language: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Projects', ProjecSchema)

