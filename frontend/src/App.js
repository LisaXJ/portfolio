import 'bootstrap/dist/css/bootstrap.css';
import 'reactstrap';
import 'animate.css';

import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

import LandingPage from './screens/LandingPage';

const App = () => {
	const [apiResponse, setApiResponse] = useState("");

	useEffect(() => {
		fetch('http://localhost:9000/testAPI')
			.then(res => res.text())
			.then(res => setApiResponse(res));
	}, []);

	return (
		<Fragment>
			<LandingPage />
			<p className="App-intro">;{apiResponse}</p>
		</Fragment>
	);
}

export default App;
