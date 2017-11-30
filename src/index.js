import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import axios from 'axios';

axios
  .get('/api/contests')
  .then(response => hydrate(<App initialContests={response.data.contests}/>, document.getElementById('root')))
  .catch(error => { console.error(error) })
