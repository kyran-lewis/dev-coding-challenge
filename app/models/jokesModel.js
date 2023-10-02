const mongoose = require('mongoose')

const jokeSchema = mongoose.Schema({
    type: String,
    setup: String,
    punchline: String
})

const Joke = mongoose.model('Joke',jokeSchema);

module.exports = Joke;