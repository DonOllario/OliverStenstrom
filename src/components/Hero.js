import React from 'react'
import styled, {css} from 'styled-components/macro';
import RoundedGlasses from '../assets/images/RoundedGlasses.png'
import { Button } from './Button';

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1277px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`
const HeroContent = styled.div`
    color: #eeeeee;
    left: 0;
`;

const HeroImage = styled.img`
    position:absolute;
    top: 0;
    right: 0;
    width: 30rem;
    height: 30rem;
    border-radius: 100%;
`;




const Hero = () => {
    return (
        <HeroSection>
            <HeroWrapper>
                
                <HeroContent>
                <HeroImage src={RoundedGlasses} alt='here_i_am'/>
                <h1>Hi, My name is Oliver!</h1>
                    
                <Button to="contact" primary="true">Contact Me</Button>
                    
                </HeroContent>
                    
                
                
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
