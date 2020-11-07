const Joke = require("../models/jokes.models")

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports.updateOneJoke = (req, res) => {
    Joke.updateOne({_id: req.params.id}, req.body)
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
}

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(data => {
        console.log(data)
        res.json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
}
