import React from 'react'
import styled from 'styled-components';
import SkillBar from 'react-skillbars';


const SkillsSection = styled.div`
    height: 100%;
    padding-bottom: 15%;
    width: 100%;
    position: relative;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-color: #212121;
`;

const SkillsWrapper = styled.div`
    text-align: center;
    color: white;
    width: 55%;
    overflow: hidden;
    justify-content: center;
    margin: 0 auto;
    margin-top: 12vw;
    h1{
        font-size: 5vw;
        margin-bottom: 8vw;
    }
`;

const skills = [
    {type: "C#", level: 75},
    {type: "ASP.NET", level: 60},
    {type: "JavaScript", level: 75},
    {type: "HTML", level: 90},
    {type: "CSS", level: 80},
    {type: "Bootstrap", level: 70},
    {type: "React", level: 80},
    {type: "Git", level: 90},
    {type: "Scrum", level: 80}

];

const colors = {
    "bar": "#14ffec",
    "title": {
      "text": "#fff",
      "background": "#00adb5"
    }
};

const Skills = () => {
    return (
        <SkillsSection id ="skills">
            <SkillsWrapper>
                <h1>Skills</h1>
                <SkillBar skills={skills} colors={colors} height={'5vh'}/>
            </SkillsWrapper>
        </SkillsSection>
    )
}

export default Skills
