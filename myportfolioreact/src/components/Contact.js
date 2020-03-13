import React, {Component} from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';
import logo from './MyFace.jpg';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{color:'white'}}>Greg Reda</h2>
                        <img 
                        src={logo}
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin:'auto',paddingTop:'1em', color:'white'}}>
                        A highly motivated student currently pursuing a computer science degree with 
                        a passion for IOS development and design, artificial intelligence, voice UI, 
                        IoT; Apple Certified Application Developer 
                        </p>

                    </Cell>
                    <Cell col={6}>
                        <h2 style={{color:'white'}}>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Roboto', color:'white'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (973)-722-7743
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Roboto', color:'white'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    gregreda1@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'30px', fontFamily:'Roboto', color:'white'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    gregreda37
                                </ListItemContent>
                            </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
                
            </div>
        )
    }
}
export default Contact;