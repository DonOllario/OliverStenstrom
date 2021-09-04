import React, {useState, useEffect} from 'react'
import styled from 'styled-components';


const GitHubURL = 'https://api.github.com/users/DonOllario/repos';

const ProjectsSection = styled.div`
    height: 100%;
    padding-bottom: 15%;
    width: 100%;
    position: relative;
    overflow: hidden;
`;

const ProjectsWrapper = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: block;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const ProjectsTitle = styled.div`
    text-align: center;
    padding: 10rem 0;
    margin: 0 0 1rem;
    color: Black;
    h4{
        color: #14ffec;
        font-size: 300%;
        margin: 0 0 15px;
    }
    h1{
        
        font-size: 400%;
    }
`;

const ProjectCards = styled.div`
    align-items: center;
    display: grid;
    border: solid;
    border-radius: 1%;
    width: 80%;
    margin: 0 auto;
    position: relative;
    padding: 100px 35px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    div{
        padding: 5px;
    }
    
    a{
        padding: 0 1rem;
        cursor: pointer;
        text-decoration: none;
        color: black;
        transition: color 0.1s, background-color 0.1s;
    }
    a:hover{
        color: #14ffec;
    }
    h1{
        font-size: 140%;
        padding: 5px 0;
    }
    p{
        font-size: 120%;
    }
`;



const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(GitHubURL)
            .then((res) => res.json())
            .then((data) => 
            {
                const projects = data.map((repo) => {
                    return{
                        name: repo.name,
                        description: repo.description,
                        repoUrl: repo.html_url
                    }
                })
                setProjects(projects);
            })
    },[]);
    return (
        <ProjectsSection id="projects">
            <ProjectsWrapper >
            <ProjectsTitle>
                    <h4>this is my</h4>
                    <h1>PROJECTS</h1>
            </ProjectsTitle>
                <ProjectCards>
                {projects.map((item, index) => (
                    <div>
                    <a href={item.repoUrl}>
                    <h1 key={index}>{item.name}</h1>
                    </a>
                    <p key={index}>{item.description}</p>
                    </div>
                ))}
                </ProjectCards>
            </ProjectsWrapper>
        </ProjectsSection>
    )
}

export default Projects
