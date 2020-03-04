import React from 'react';
import { Link } from 'react-router-dom'
import BtNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/logo.png';
import { StyledNavbarItem } from './Navbar.styles';
import navigation from '../../data/navigation';
interface NavbarProps {
    
}

interface NavItemProps {

}


const Navbar = () => {
    return <BtNavbar collapseOnSelect bg="dark" expand="md" sticky="top" variant="dark">
        <BtNavbar.Brand>
            <img style={{width:'80px', height:'auto'}} src={Logo} alt="le refuge"/>
        </BtNavbar.Brand>
        <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BtNavbar.Collapse id="basic-navbar-nav">
            <Nav justify fill variant="pills">
                {navigation.map((item, index)=>(
                    <Nav.Link>
                        <Link key={index} to={item.path}> {item.name} </Link>
                    </Nav.Link>
                ))}
            </Nav>
        </BtNavbar.Collapse>
    </BtNavbar>
};

export default Navbar;