// import and config
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const port = 9999

const app = express()

app.use(cors())
app.use(express.json())

// connect to a db
mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Established a connection to the database'))
  .catch(err => console.log('Something went wrong when connecting to the database', err))

// import the routes file into app.js
require('./routes/jokes.routes')(app)


// listen
app.listen(port, () => {
    console.log(`you are on ${port}`)
})