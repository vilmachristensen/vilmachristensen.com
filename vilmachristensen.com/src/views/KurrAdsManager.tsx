import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import KurrMockup from '../assets/KurrAdsManager_mockup.png';

const KurrAdsManager: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Kurr Ads Manager' header='Kurr Ads Manager'
                course='Advanced Quality Project Work in Interaction Technology and Design-Build-Test'
                tools='React, TypeScript, Git, Figma, SCRUM'
                gradientColor1='#FF9B7F'
                gradientColor2='#F9C7B8'
                picture={KurrMockup} />
            <TextSection contentType='Kurr' designText='' developText='Detta är en develop text' />
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


export default KurrAdsManager;