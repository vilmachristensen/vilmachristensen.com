import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import UmeaStigenMockup from '../assets/UmeaStigen_mockup.png'

const UmeaStigen: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='UmeaStigen' header='Umeå Stigen' 
            course='Applications Development for Internet'
            tools='React, JavaScript, MapBox API, Umeå API'
            gradientColor1='#606951'
            gradientColor2='#ACB597'
            picture={UmeaStigenMockup} />
            <TextSection contentType='UmeaStigen' designText='Detta är en design text' developText='Detta är en develop text'/>
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


export default UmeaStigen;