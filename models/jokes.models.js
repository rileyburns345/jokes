const mongoose = require('mongoose')

// create a model
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "setup is required"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"]
    }
}, {timestamps: true})

let Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke