import express from "express"
import apiRouter from "./api"
import config from "./config";

const server = express()

server.set("view engine", "ejs")
server.get("/", (request, response) => {
    response.render("index", {
        content: "Hello Express and EJS"
    })
})

server.use('/api', apiRouter)
server.use(express.static('public'))


server.listen(config.port,()=>{
    console.log("Listening on port: " + config.port)
})
