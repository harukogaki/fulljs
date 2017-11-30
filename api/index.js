import express from "express"
const router = express.Router()
import data from '../src/testData.json';

const contests = data.contests.reduce((obj, contest) =>{
  obj[contest.id] = contest;
  return obj;
},{});

router.get("/contests", (request,response) =>{
    response.send({
      contests: contests
    })
});

router.get("/contests/:contestId", (request,response) =>{
  let contest = contests[request.params.contestId];
  contest.description = 'heheheheheheh';
  response.send(contest)
});

export default router