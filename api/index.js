import express from "express"
const router = express.Router()
import data from '../src/testData.json';

router.get("/contests", (request,response) =>{
    response.send({contests: data.contests})
})

export default  router