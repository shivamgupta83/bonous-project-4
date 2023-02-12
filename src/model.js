const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    text : String,
    dateTime : String,
})

module.exports = mongoose.model("bonus", schema)