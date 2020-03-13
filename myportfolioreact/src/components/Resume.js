import React, {Component} from 'react';
import {Grid, Cell} from'react-mdl';
import logo from './MyFace.jpg';
import Education from'./Education';
import Experience from'./Experience';


class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                            src={logo}
                            alt="avatar"
                            style={{height: '200px'}}
                            className="avatar-img-resume"
                            />

                        </div>
                        <h2 style={{paddingTop:'2em'}}>Greg Reda</h2>
                        <h4 style={{color:'grey'}}>Full Stack Developer</h4>
                        <hr style={{borderTop:'3px solid black',width:'50%'}}/>
                        <p>
                        A highly motivated student currently pursuing a computer science degree with a passion 
                        for IOS development and design, artificial intelligence, voice UI, IoT; Apple Certified Application Developer 
                        </p>
                        <hr style={{borderTop:'3px solid black',width:'50%'}}/>
                        <h5>Location</h5>
                        <p>Mendham, New Jersey</p>
                        <h5>Phone</h5>
                        <p>(973)-722-7743</p>
                        <h5>Email</h5>
                        <p>gregreda1@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col"col={8}>
                        <h2>Education</h2>
                        <Education
                        startYear={2017}
                        endYear={2021}
                        schoolName="Drew University"
                        schoolDescription="Calculus with Analytic Geometry, Data Structures and Algorithms, Discrete Mathematics, 
                        Game Production in C#, Javascript, Language Proof and Logic, Android Mobile App Development, Object-Oriented Programming, 
                        Physics with Calculus I, Russian Language I, II,III "
                        
                        />
                                                <h2>Education</h2>
                        <Education
                        startYear={2019}
                        endYear={2020}
                        schoolName="County College of Morris"
                        schoolDescription="Class Projects include; Unity Game Production 2D Published IOS Application, Virtual 
                        Profile Marketing Platform for conferences, Android Application for Doctors keeping track of patients"
                        />
                        <hr style={{borderTop:'3px solid white'}}/>

                        <h2>Experience</h2>

                        <Experience
                        jobName="TopBox Inc. (Freelance Developer)"
                        jobDescription="Integrated Google Maps SDK for IOS; rest API to send JSON response using queries; integrated 
                        Firebase/Firestore user registration, Data Pagination; database structure, image recognition to filter NSFW uploaded images, 
                        UI controls for various functions such as calling, emailing, gesture recognition, haptic feedback, direct messaging, creating 
                        media assets using Sketch, Adobe XD, Illustrator and Photoshop "
                        />
                        
                        <Experience
                        jobName="Siinc (Freelance Developer)"
                        jobDescription="Instant messaging with real-time notifications using Google Firebase Cloud Functions,Geofencing users using 
                        CoreLocation to interact with local users ongoing project..."
                        />
                        <hr style={{borderTop:'3px solid white'}}/>
                        <h2>Skills</h2>
                        <Experience                 
                        jobName="Adobe Creative Cloud"
                        jobDescription="Proficient in Adobe Creative Cloud (Illustrator, InDesign, Photoshop, Lightroom, XD) "
                        />
                        <Experience                 
                        jobName="Apple Certified Developer"
                        jobDescription="Integrated Apple Machine Learning Core ML technology to predict the unique tool type and present 
                        a description of what the tool is used for, trained the model using 1,000+ photos categorized and filtered using a rest API hosted locally."
                        />
                        <Experience                 
                        jobName="Specality"
                        jobDescription="Project Management, Strategic Planning, Management, requirements gathering, testing, documentation, translating business 
                        requirements to technical requirements, Agile, project scheduling, risk mitigation, cost estimation "
                        />

                        
                        
                        



                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;