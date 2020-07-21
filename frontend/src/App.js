import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './screens/Navigation';
import HomePage from './screens/HomePage';

function App() {
  return (
    <Fragment>
      <Navigation />
      <HomePage />
    </Fragment>
  );
}

export default App;
