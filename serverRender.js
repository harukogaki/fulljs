import config from './config'
import axios from 'axios'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/components/App'


const getApiUrl = contestId => {
  return (
    contestId
      ? `${config.serverUrl}/api/contests/${contestId}`
      : `${config.serverUrl}/api/contests`);
}

const getInitialData = (data, contestId) =>{
  return (
    contestId
      ? {
        currentContestId: data.id,
        contests: {
          [data.id]: data
        }
      }
      : {contests: data.contests}
  );
};

const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then(response => {
      const initialData =  getInitialData(response.data, contestId);

      return ReactDOMServer.renderToString(
        <App initialData={initialData}/>
      );
    });

export default serverRender;