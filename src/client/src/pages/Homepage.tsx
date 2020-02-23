import React from 'react';
import styled from 'styled-components';
import Image from '../assets/image.jpg';

const StyledTitle = styled.h1`
    color:red;
`

const Homepage = () => {
    return <>
        <StyledTitle>You are on the homepage</StyledTitle>
        <img src={Image}/>
    </>
}

export default  Homepage