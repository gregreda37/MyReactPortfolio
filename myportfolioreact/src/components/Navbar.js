import {Component} from 'react';
import { Navigation, Drawer } from 'react-mdl';
import {Link} from 'react-router-dom';
import React from 'react';


class Navbar extends Component {
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    render() {
        return (
            <Drawer className="header-color" title={<Link style={{textDecoration:'none', color:'black'}} to="/"onClick={() => this.hideToggle()}>Greg's Portfolio</Link>}>
            <Navigation>
                <Link to="/projects"  onClick={() => this.hideToggle()} >Projects</Link>
                <Link to="/resume"  onClick={() => this.hideToggle()} >Resume</Link>
                <Link to="/contact"  onClick={() => this.hideToggle()} >Contact</Link>
            </Navigation>
        </Drawer>
        );
    }
}
export default Navbar;