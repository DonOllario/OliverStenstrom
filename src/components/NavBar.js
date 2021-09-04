import React from 'react'
import styled, {css} from 'styled-components/macro';
import { menuData } from '../data/MenuData';
import { CgMenuRight } from 'react-icons/cg';
import pdfFile from '../assets/Oliver Stenström CV.pdf';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = styled.nav`
    height: 80px;
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
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-family: 'Fredoka One', cursive;
    color: #14ffec;
    height: 28px;
    font-size: 3.5rem;
    position: relative;
    top: 10px;
    padding-left: 0;

    p{
        position: relative;
        color: white;
        font-size: 25px;
    }
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
    
    a {
    text-decoration: none;
    position: relative;
    display: block;
    padding: 16px 0;
    margin: 0 12px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: color 0.1s, background-color 0.1s;
    color: #fff;
    
    }
    a:hover {
    color: #14ffec;
    }
    a:focus, a:active {
    color: #14ffec;
    }

    a::before {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    height: 3px;
    width: 100%;
    background-color: #14ffec;
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(0, 1);
            transform: scale(0, 1);
    transition: color 0.1s, -webkit-transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }

    a:active::before {
    background-color: #14ffec;
    }

    a:hover::before,
    a:focus::before {
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    }

    
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

const NavBar = ({ toggle }) => {
    return (
        <Nav>
        <Logo to="/OliverStenstrom/"><p>&#10100;&nbsp;</p>O<p>&nbsp;liver&nbsp;&#10101;</p></Logo>
        <MenuBars onClick={toggle}/>
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks smooth to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
            <a href={pdfFile} target="_blank" rel="noopener noreferrer" download="Oliver Stenström CV.pdf"> Download Resume </a>
        </NavMenu>
        {/* <NavBtn>
            <Button to="contact" primary="true">Contact Me</Button>
        </NavBtn> */}
        </Nav>
    )
}

export default NavBar
