import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';
import TopboxLogo from './topboxLogo.png';
import toolClassifierLogo from './toolClassifierLogo.png';
import boxStackerLogo from './boxStackerPro.png';
import merchandiseLogo from './merchandiseLogo.png';
import carpentryPhoto from './carpentryPhoto.jpg';
import sixteenTinyHome from './sixteenTinyHome.jpg';
import twentyTinyHome from './twentyTinyHome.jpeg';
import twentyfourTinyHome from './twentyfourTinyHome.jpg';
import staircase from './staircase.jpg'
import garden from './garden.jpg'
import reactLogo from './reactLogo.png'
import JoinScreen from './JoinScreen.jpg'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
            <div className="projects-grid">

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + TopboxLogo + ") center / cover"}}>
                        <h1 className="project-background">Topbox Inc.</h1>
                    </CardTitle>
                    <CardText>
                    Integrated Google Maps SDK for IOS; rest API to send JSON response using queries; 
                    integrated Firebase/Firestore user registration, Data Pagination; database structure, 
                    image recognition to filter NSFW uploaded images,
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/Topbox-Contractor-Marketing" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/topbox-inc/id1476438064" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + toolClassifierLogo + ") center / cover"}}>
                        <h1 className="project-background">Tool Classifier.</h1>
                    </CardTitle>
                    <CardText>
                    Integrated Apple Machine Learning Core ML technology to predict the unique tool type and present a description of what the 
                    tool is used for, trained the model using 1,000+ photos categorized and filtered using a rest API hosted locally.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/ToolClassifierApp" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/tool-classifier/id1486603456" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + boxStackerLogo + ") center / cover"}}>
                        <h1 className="project-background">Box Stacker</h1>
                    </CardTitle>
                    <CardText>
                    Box Stacker Game! Try and beat your high score by stacking as many boxes as you can. 
                    Careful with each box you stack the level speed increases!
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/ToolClassifierApp" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/tool-classifier/id1486603456" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                
            </div>
            )
    }else if(this.state.activeTab === 1){
        return(
            <div className="projects-grid">
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + merchandiseLogo + ") center / cover"}}>
                        <h1 className="project-background">The Beach Co.</h1>
                    </CardTitle>
                    <CardText>
                    In our mobile application we make it easy to browse our merchandise and select your unique style. Set your happiness level to see 
                    each day how happy you were. Select the type of apparel you’d like to look at and get a quick glimpse on the app view. When you’re 
                    ready to purchase select the web view and be directed to our store. If you happiness hasn’t increased from the last day then it won’t be recorded!
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/TheBeachCoAndroid" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

            </div>

        )

    } else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + reactLogo + ") center / cover"}}>
                        <h1 className="project-background">Portfolio Website</h1>
                    </CardTitle>
                    <CardText>
                    Programmed using React.js and MDL Bootstrap
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/MyReactPortfolio" rel="noopener noreferrer" target="_blank">GitHub</a>
                            </div>
                        </Button>
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'black', height:'275px', background: "url(" + JoinScreen + ") center / cover"}}>
                    <h1 className="project-background">Chat Application</h1>
                </CardTitle>
                <CardText>
                This is my chat application using Heroku for the server and Github Pages
                </CardText>
                <CardActions  border>
                    <Button>
                    
                        <div className= "button-color">
                        <i className="fa fa-github-square"  aria-hidden="true"/>
                        <a href="https://github.com/gregreda37/chat-application" rel="noopener noreferrer" target="_blank">GitHub</a>
                        </div>
                    </Button>
                </CardActions>

                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>

            </div>
        )
    }else if(this.state.activeTab === 3){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + carpentryPhoto + ") center / cover"}}>
                        <h1 className="project-background">Deck Repair</h1>
                    </CardTitle>
                    <CardText>
                    General Contracting Company Learned 3D modeling software to design tiny homes, Designed blueprints and 
                    sketches using Xactimate Software, Worked with engineers and architects to optimize structure of tiny homes
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/portfolio" rel="noopener noreferrer" target="_blank">Gallary</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + staircase + ") center / cover"}}>
                        <h1 className="project-background">Staircase Install</h1>
                    </CardTitle>
                    <CardText>
                    Setting footings for staircase foundation, leveling, Utilized time management skills needed to meet specific deadlines, 
                    Tasked with continually learning new skills to adapt to the different projects
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/portfolio" rel="noopener noreferrer" target="_blank">Gallary</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + garden + ") center / cover"}}>
                        <h1 className="project-background">Garden</h1>
                    </CardTitle>
                    <CardText>
                    Setting footings for staircase foundation, leveling, Utilized time management skills needed to meet specific deadlines, 
                    Tasked with continually learning new skills to adapt to the different projects
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/portfolio" rel="noopener noreferrer" target="_blank">Gallary</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

            </div>
        )

    }else if(this.state.activeTab === 4){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + sixteenTinyHome + ") center / cover"}}>
                        <h1 className="project-background">16' Tiny Home</h1>
                    </CardTitle>
                    <CardText>
                    16’x8'x13' built on a heavy duty dual-axel trailer with dual lofts and 5 windowsstrategically placed throughout the home. Fully 
                    insulated with interior paneling and exterior vinyl siding. Wired 8 Electrical outlets strategically placed throughout the home with 
                    a 30 amp breaker standard.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/16-tiny-house#23994441-049c-4ea6-b9d8-3264a21e723a" rel="noopener noreferrer" target="_blank">Gallary</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + twentyTinyHome + ") center / cover"}}>
                        <h1 className="project-background">20' Tiny Home</h1>
                    </CardTitle>
                    <CardText>
                    20'x8'x13' built on a heavy duty dual-axel trailer with dual lofts and 5 windowsstrategically placed throughout the home. Fully insulated with 
                    interior paneling and exterior vinyl siding. Wired 13 Electrical outlets strategically placed throughout the home with a 30 amp breaker standard.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/20-tiny-house#04da575f-9444-4ca4-b91e-6101e7c09126" rel="noopener noreferrer" target="_blank">Gallary</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + twentyfourTinyHome + ") center / cover"}}>
                        <h1 className="project-background">24' Tiny Home</h1>
                    </CardTitle>
                    <CardText>
                    24’x8'x13' built on a heavy duty dual-axel trailer with two lofts and 8 windowsstrategically placed throughout the home. 
                    Fully insulated with interior cedar woodpaneling and exterior vinyl siding. Wired 13 electrical outlets strategically placed 
                    throughout the home with a 30 amp breaker standard and four light fixtures. Rough plumbing for kitchen sink, shower, toilet and bathroom sink installed.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/24-tiny-house#41309f9e-a99b-4790-8d76-f8a24a98577d" rel="noopener noreferrer" target="_blank">Gallary</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

            </div>
            
        )

    }

    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>Swift</Tab>
                    <Tab>Android</Tab>
                    <Tab>Web</Tab>
                    <Tab>Carpentry</Tab>
                    <Tab>Tiny Homes</Tab>
                </Tabs>

                
                <Grid>
                    <Cell col={12}>
                        <div className="content>">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                    
                
            </div>

        )
    }
}
export default Projects;