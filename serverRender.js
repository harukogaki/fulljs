import config from './config'
import axios from 'axios'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/components/App'

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(response => {
      return ReactDOMServer.renderToString(
        <App initialData={response.data}/>
      );
    });

export default serverRender;