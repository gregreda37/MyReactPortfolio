import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import logo from './MyFace.jpg';

class Landing extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className ='landing-grid'>
                    <Cell col={12}>
                        <img
                        src={logo}
                        alt="Myface"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>

                            <hr/>
                            <p>Swift | Javascript | Adobe Cloud | React Native | Node.js</p>
                            {/* This is going to be our linkedin */}
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/gregreda/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/gregreda37" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                <a href="https://apps.apple.com/us/developer/greg-reda/id1476438063" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-apple"  aria-hidden="true"/>
                                </a>
                                <a href="https://medium.com/@gregreda/learn-to-code-the-right-way-22fb9ef33214" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-medium"  aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;