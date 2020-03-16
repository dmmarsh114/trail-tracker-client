import React, { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';

const Sidebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Navbar color='faded' light expand='md'>
            <NavbarBrand href='/'>TrailTracker -- Track your Trails here!</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        {props.token ? <Button onClick={props.clickLogout}>Logout</Button> : null}
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sidebar;