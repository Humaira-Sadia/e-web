import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav'
// import reactlogo from './images/logo.png'

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./images/logo.png"/>
            </NavLink>
            <Nav />
        </MainHeader>
    )
};

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 8rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo{
        height: 5rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        img{
            height: 4rem;
            margin-left: -30px;
        }
    }
`;

export default Header;
