const express = require("express")
const http = require("http")
const {Server} = require("socket.io")

const app = express()
const httpserver = http.createServer(app)

const server = new Server(httpserver, {cors : { //cors evitare che il sito possa richiamare un altro sito
    origin : "*",                               //* diesabilita il cors , accetta tutti gli indirizzi
    methods : ["GET", "POST"]
}})

app.use(express.static("../static"))

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + '../static/index.html')
})
// http://localhost:{port}/

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})