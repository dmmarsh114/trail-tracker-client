import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import './Sitebar.css';

import Landing from '../Landing/Landing';
import Auth from '../../Auth/Auth';
import TrailIndex from '../../Trails/TrailIndex';
import AllTrails from '../../Trails/AllTrails';

const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Navbar color='faded' light expand='md'>
                <NavbarBrand href='/'>TrailTracker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        {/* LANDING PAGE */}
                        <NavItem>
                            <Button><Link to='/' className='link'>Home</Link></Button>
                        </NavItem>
                        <NavItem>
                            <Button><Link to='/alltrails'>All Trails</Link></Button>
                        </NavItem>
                        {/* TRAIL INDEX */}
                        <NavItem>
                            {props.token === localStorage.getItem('token') ?
                                <Button><Link to='/mytrails' className='link'>My Trails</Link></Button>
                                : null}
                        </NavItem>
                        {/* LOGIN / LOGOUT */}
                        <NavItem>
                            {props.token === localStorage.getItem('token') ?
                                <Button color='danger' onClick={props.clickLogout}>Logout</Button>
                                : <Button color='warning'><Link to='/auth' className='link'>Login</Link></Button>}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route exact path='/'><Landing token={props.token} /></Route>
                <Route exact path='/auth'><Auth updateToken={props.updateToken} token={props.token} /></Route>
                <Route exact path='/mytrails'><TrailIndex updateToken={props.updateToken} token={props.token} /></Route>
                <Route exact path='/alltrails'><AllTrails token={props.token} /></Route>
            </Switch>
        </div>
    )
}

export default Sitebar;