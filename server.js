import express from "express"
import apiRouter from "./api"
import config from "./config";
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleWare({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set("view engine", "ejs");
server.get("/", (request, response) => {
  response.render("index", {
    content: "Hello Express and EJS"
  })
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port,()=>{
  console.log("Listening on port: " + config.port)
});
