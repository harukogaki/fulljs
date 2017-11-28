import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const App = ({message}) => {  return(<h1 className='text-center'>Hello {message}</h1>); };

App.propTypes = {
  message: PropTypes.string.isRequired
};

render(<App message='Sal'/>, document.getElementById('root'));