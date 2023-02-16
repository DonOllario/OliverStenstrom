import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import RoundedGlasses from '../assets/images/RoundedGlasses.png'
import { Button } from './Button';
import TextLoop from './TextLoop';

const HeroSection = styled.section`
    height: 100vh;
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

    h2{
        position: relative;
        color: #eeeeee ;
        width: 22rem;
        top: 20rem;
        right: 20%;

        font-size: 2rem;

        @media screen and (max-width: 768px) {
        display: none;
        }
        @media screen and (max-height: 950px) {
        display: none;
        }
    
    }
`

const HeroImage = styled.img`
    position: absolute;
    top: 100px;
    max-height: 30vw;
    max-width: 30vw;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    z-index: 10;
    border-radius: 100%;
    left: 55%;
`;


const HeroContent = styled.div`
    color: #eeeeee;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
    left: 10%;
    
    h1{
        font-size: clamp(1rem, 5vw, 4rem);
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
        font-family: 'Lato', sans-serif;
    }
    p {
        font-size: clamp(0.8rem, 5vw, 1.8rem);
        margin-bottom: 1.6rem;
    }
    h4{
        color: #393e46;
    }
`;

const Hero = () => {
    const renderTextLoopOnce = useMemo(
        () => TextLoop(),
        []
      );
    return (
        <HeroSection>
            <HeroWrapper>
                <HeroImage src={RoundedGlasses} alt='here_i_am'/>
                <HeroContent>
                <div className='textLoop'>
                 {renderTextLoopOnce}
                 </div>
                <Button 
                to="/contact" 
                primary="true">
                Contact Me
                </Button>
                </HeroContent>
                <span>
                <h2>“Everybody should learn to program a computer, because it teaches you how to think.”</h2>
                </span>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
