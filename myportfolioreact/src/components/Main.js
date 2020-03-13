import React from 'react';
import LandingPage from './Landingpage';
import Projects from './Projects';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Resume from './Resume';

import {Switch,Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component ={LandingPage} />
        <Route path = "/aboutme" component ={AboutMe} />
        <Route path = "/projects" component ={Projects} />
        <Route path = "/contact" component ={Contact} />
        <Route path = "/resume" component ={Resume} />
    </Switch>

)

export default Main;