import React from 'react';
import styled from 'styled-components';
import Actus from '../assets/Actus_mockup.png'
import { Header_small } from '../styles/Text';


interface ProjectCardProps {
    name: string,
    gradientColor1: string,
    gradientColor2: string, 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, gradientColor1, gradientColor2 }) => {

    return (
        <Card gradientColor1={gradientColor1} gradientColor2={gradientColor2}>
            <Content>
                <img src={Actus} width={"80%"} alt="Actus"/>
                <Header_small>Actus</Header_small>
            </Content>
        </Card>
    );
};

const Card = styled.div<{ gradientColor1: string, gradientColor2: string}>`
height: 584px;
width: 741px;
border-radius: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
background-image: linear-gradient(170deg, ${(props) => (props.gradientColor1)}, ${(props) => (props.gradientColor2)});
`;

const Content = styled.div`
display: grid;
grid-template-rows: auto auto auto;
width: auto;
padding-top: 50px;
`;

export default ProjectCard;