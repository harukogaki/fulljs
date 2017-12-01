import express from "express"
import apiRouter from "./api"
import config from "./config";
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender'

const server = express();

server.use(sassMiddleWare({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set("view engine", "ejs");
server.get(["/", "/contests/:contestId"], (request, response) => {
  serverRender(request.params.contestId)
    .then(content => {
      console.log(content)
      response.render('index', { content });
    })
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port,config.host, ()=>{
  console.log("Listening on port: " + config.port)
});
