import React from 'react'
import styled, {css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
// import { Button } from './Button';
import { CgMenuRight } from 'react-icons/cg';

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 50;
    width: 100%;
    background: black;
`;

const NavLink = css `
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-family: 'Fredoka One', cursive;
    color: #14ffec;
    height: 28px;
    font-size: 3.5rem;
`;

const MenuBars = styled(CgMenuRight)`
    display: none;
    color: #14ffec;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    ${'' /* margin-right: -48px; */}

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;


// NavMenu Button
// const NavBtn = styled.div`
//     display: flex;
//     align-items: center;
//     margin-right: 24px;

//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;

const NavBar = () => {
    return (
        <Nav>
        <Logo to="/">O</Logo>
        <MenuBars/>
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
        </NavMenu>
        {/* <NavBtn>
            <Button to="contact" primary="true">Contact Me</Button>
        </NavBtn> */}
        </Nav>
    )
}

export default NavBar
