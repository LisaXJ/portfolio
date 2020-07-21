import 'bootstrap/dist/css/bootstrap.css';
import 'reactstrap';
import 'animate.css';

import React, { Fragment } from 'react';
import './App.css';

import Navigation from './screens/Navigation';
import HomePage from './screens/HomePage';
import Sidebar from './screens/Sidebar';
import LandingPage from './screens/LandingPage';

function App() {
	return (
		<Fragment>
			<LandingPage />
		</Fragment>
	);
}

export default App;
