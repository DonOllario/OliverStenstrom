import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import pdfFile from '../assets/Oliver Stenström CV.pdf';
import {
    AiFillLinkedin, 
    AiFillGithub,
    AiOutlineInstagram,
    AiFillFacebook 
} from 'react-icons/ai';

const socialIcons = [
    AiFillLinkedin,
    AiFillGithub,
    AiOutlineInstagram,
    AiFillFacebook
];

const socialIconLinks = [
    {link: 'https://www.linkedin.com/in/oliver-stenstr%C3%B6m-9399711b7/'},
    {link: 'https://github.com/DonOllario'},
    {link: 'https://www.instagram.com/oliverstenstrom/'},
    {link: 'https://www.facebook.com/oliver.stenstrom.1'}
];


const FooterWrapper = styled.div`
    
    display: flex;
    padding: 1rem 2rem;
    z-index: 50;
    width: 100%;
    background: #14ffec;
    align-items: center;
    justify-content: center;

    
    
    @media screen and (max-width: 920px){
        height: 250px;
    }
    
    `;



const SocialContent = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 920px){
        
        display: block;
    }
    a {
    text-decoration: none;
    position: relative;
    display: block;
    margin: 0 12px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: color 0.2s, background-color 0.2s;
    color: black;
    }
    a:hover {
    color: #FDF4DC;
    }
}
    a:focus, a:active {
    color: #FDF4DC;
    }

    a::before {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    height: 3px;
    width: 100%;
    background-color: #FDF4DC;
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(0, 1);
            transform: scale(0, 1);
    transition: color 0.2s, -webkit-transform 0.2s ease-out;
    transition: color 0.2s, transform 0.2s ease-out;
    transition: color 0.2s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }

    a:active::before {
    background-color: #FDF4DC;
    }

    a:hover::before,
    a:focus::before {
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    }
    .icon-styles{
        height: 55px;
        width: 55px;
        border-radius: 100%;
        margin: 0 5px;

        @media screen and (max-width: 920px){
        
        height: 30px;
        width: 30px;
        margin: 8px 5px;
    }
    }
`;

const FooterMenu = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 10%
    ;@media screen and (max-width: 920px){
        display: block;
    }
    a {
    text-decoration: none;
    position: relative;
    display: block;
    padding: 16px 0;
    margin: 0 12px;
    font-size: 1.2rem;
    text-transform: uppercase;
    transition: color 0.1s, background-color 0.1s;
    color: black;
    @media screen and (max-width: 920px){
        display: block;
        font-size: 15px;
        margin: 0 0 0 5%;
    }
    }
    a:hover {
    color: #FDF4DC;
    }
    a:focus, a:active {
    color: #FDF4DC;
    }

    a::before {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    height: 3px;
    width: 100%;
    background-color: #FDF4DC;
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(0, 1);
            transform: scale(0, 1);
    transition: color 0.1s, -webkit-transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out;
    transition: color 0.1s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }

    a:active::before {
    background-color: #FDF4DC;
    }

    a:hover::before,
    a:focus::before {
    -webkit-transform-origin: center top;
            transform-origin: center top;
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
    }
`;

const FooterMenuLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    
`;




const Footer = () => {
    return (
        <FooterWrapper>
                <SocialContent>
               {socialIconLinks.map((item, index) => {
                    const Icon = socialIcons[index]
                    return(
                            <a href={item.link} key={index} target="_blank" rel="noreferrer">
                                <Icon className="icon-styles"/>
                            </a>
                    )
               })}
               </SocialContent>
               <FooterMenu>
                    {menuData.map((item, index) => (
                            <FooterMenuLink to={item.link} key={index}>
                                {item.title}
                            </FooterMenuLink>
                        ))}
                        <a href={pdfFile} target="_blank" rel="noopener noreferrer" download="Oliver Stenström CV.pdf"> Download Resume </a>
               </FooterMenu>
        </FooterWrapper>
    )
}

export default Footer;
