import React from 'react';
import { Link } from 'react-router-dom'
import { StyledNavbar, StyledNavbarItemContainer, StyledNavbarItem } from './Navbar.styles';
import navigation from '../../data/navigation';

const Navbar = () => {
    return <StyledNavbar>
        <StyledNavbarItemContainer>
            {navigation.map((item, index)=><StyledNavbarItem key={index}>
                <Link to={item.path}> {item.name} </Link>
            </StyledNavbarItem>)}
        </StyledNavbarItemContainer>
    </StyledNavbar>
};

export default Navbar;