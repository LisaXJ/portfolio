import 'bootstrap';
import 'reactstrap';

import React, { Fragment } from 'react';
import './App.css';

import Navigation from './screens/Navigation';
import HomePage from './screens/HomePage';
import Sidebar from './screens/Sidebar';

function App() {
  return (
    <Fragment>
      <Navigation />
	  <Sidebar />
      <HomePage />
    </Fragment>
  );
}

export default App;
