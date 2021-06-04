import React from 'react';
import styled from 'styled-components/macro';
import RoundedGlasses from '../assets/images/RoundedGlasses.png'
import { Button } from './Button';
import Typical from 'react-typical';

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
    
    h2{
        position: relative;
        color: #eeeeee ;
        width: 22rem;
        top: 20rem;
        right: 10%;

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
    max-height:25rem;
    max-width: 25rem;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    z-index: 10;
    border-radius: 100%;
    left: 55%;

    @media screen and (max-width: 768px) {
        left: 25%;
        width: 15rem;
        height: 15rem;
    }
    @media screen and (max-height: 850px) {
        left: 20%;
        width: 8rem;
        height: 8rem;
    }
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
    return (
        <HeroSection>
            <HeroWrapper>
                <HeroImage src={RoundedGlasses} alt='here_i_am'/>
                <HeroContent>
                <h4>Hello there!👋 My name is</h4>
                <h1>Oliver Stenström</h1>
                <p>I'm a 
                <Typical 
                loop={Infinity}
                wrapper="b" 
                steps={[
                    ' student',
                    1000,
                    ' {developer}',
                    1000,
                    ' <webdesigner>',
                    1000,
                    ' 🎮gamer🎮',
                    1000,
                    ' 🍜ramen-enthusiast🍜',
                    1000
                ]}
                />
                </p>
                
                    
                <Button 
                to="contact" 
                primary="true">
                Contact Me
                </Button>
                </HeroContent>
                <h2>“Everybody should learn to program a computer, because it teaches you how to think.”</h2>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
