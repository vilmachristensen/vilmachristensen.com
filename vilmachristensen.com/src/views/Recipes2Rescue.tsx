import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import Recipes2RescueMockup from '../assets/Recipes2Rescue_mockup.png';

const Recipes2Rescue: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Recipes2Rescue' header='Recipes2Rescue' 
            course='Human-Computer Interaction'
            tools='Figma, Google Forms'
            gradientColor1='#BBCE8A'
            gradientColor2='#FFFBDB'
            picture={Recipes2RescueMockup} />
            <TextSection contentType='Recipes2Rescue' designText='Detta är en design text' developText='Detta är en develop text'/>
            <Footer />
        </Content>
    )

}

const Content = styled.div`
display: grid; 
grid-template-rows: auto auto auto auto; 
gap: 0px;
background-color: ${Colors.white};
`;


export default Recipes2Rescue;