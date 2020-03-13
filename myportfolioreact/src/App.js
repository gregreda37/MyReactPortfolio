import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content,Footer,FooterSection,FooterLinkList } from 'react-mdl';
import Main from './components/Main'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div style={{height: '700px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content />
        <Footer size="mini">
        <FooterSection type="left" logo="Greg Reda">
          <FooterLinkList>
              <a href="#">Contact</a>
              <a href="#">2020</a>
        </FooterLinkList>
    </FooterSection>
</Footer>


        
    </Layout>
</div>

  );
}

export default App;
