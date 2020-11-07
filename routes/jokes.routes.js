const JokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes)
    app.post("/api/jokes/new", JokeController.createNewJoke)
    app.put("/api/jokes/update/:id", JokeController.updateOneJoke)
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke)
    app.get("/api/jokes/:id", JokeController.findOneSingleJoke)
}

