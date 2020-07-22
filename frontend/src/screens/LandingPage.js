import React, { useState, Fragment }  from 'react';
import { Button } from 'reactstrap';
import Navigation from './Navigation';
import Sidebar from './Sidebar';

const LandingPage = () => {
    const [showLandingPage, setShowLandingPage] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);

    const toggle = () => {
        setShowLandingPage(false)
        setButtonClicked(true);
    }

    return(
        <Fragment>
            { 
                showLandingPage
                ? <div className={'landing-page-container overlay animate__animated animate__backInUp' + (buttonClicked ? ' animate__backOutUp' : '')}>
                        <div className="landing-page-text">
                            <p>Some text. And some more <u>text</u>.</p>
                            <Button className="lp-button button-animation-hidden" onClick={toggle}>Click Me!</Button>
                        </div>
                    </div>

                :  <div className="main-container">
                    <div className="animate__animated animate__backInUp animate__slow">
                        <Navigation  />
                        <Sidebar />
                    </div>
                    <div className={'landing-page-container overlay animate__animated animate__backOutUp'}>
                        <div className="landing-page-text">
                            <p>Some text. And some more <u>text</u>.</p>
                            <Button className="lp-button button-animation-hidden" onClick={toggle}>Click Me!</Button>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
};

export default LandingPage;