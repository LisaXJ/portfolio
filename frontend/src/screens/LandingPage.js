import React, { useState, Fragment }  from 'react';
import { Button } from 'reactstrap';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

const LandingPage = () => {
    const [showLandingPage, setShowLandingPage] = useState(true);

    const toggle = () => {
        setShowLandingPage(false)
    }

    return(
        <Fragment>
            { 
                showLandingPage
                ? <div className="landing-page-container overlay animate__animated animate__backInUp">
                        <div className="landing-page-text">
                            <p>Some text. And some more <u>text</u>.</p>
                            <Button className="lp-button button-animation-hidden" onClick={toggle}>Click Me!</Button>
                        </div>
                    </div>

                : <div className="main-container animate__animated animate__fadeInUp fast">
                    <Navigation  />
                    <Sidebar />
                </div>
            }
        </Fragment>
    );
};

export default LandingPage;