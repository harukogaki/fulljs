import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import axios from 'axios';

axios
  .get('/api/contests')
  .then(response => hydrate(<App initialData={response.data}/>, document.getElementById('root')))
  .catch(error => { console.error(error) })
