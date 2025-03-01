// Require built-in module
const path = require("path")

// Require Third-party modules
const express = require("express")
const bodyParser = require("body-parser")

// Instance App object
const app = express()

// Path variables
const absolutePathToViews = path.join(__dirname, "views")
const absolutePathToPublic = path.join(__dirname, 'public')

// Using Middlewares
app.use(express.static(absolutePathToPublic))

// Handling HTTP verbs
// GET verb
app.get('/', function(req, res) {
    res.send("Server is set up sucessful!")
})
app.get('/login', function(req, res) {
    res.sendFile(path.join(absolutePathToViews, "login.html"))
})
// POST verb
app.post('/login', function(req, res) {
    res.sendFile(path.join(absolutePathToViews, "welcome.html"))
})


// Server is Listening
app.listen(8080)