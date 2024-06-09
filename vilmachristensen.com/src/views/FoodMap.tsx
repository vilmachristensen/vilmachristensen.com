import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import FoodMapMockup from '../assets/FoodMap_mockup.png'

const FoodMap: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='FoodMap' header='FoodMap' 
            course='Development of Mobile Applications'
            tools='Android Studio, Kotlin'
            gradientColor1='#7D1B2F'
            gradientColor2='#C96B7E'
            picture={FoodMapMockup} />
            <TextSection contentType='FoodMap' designText='Detta är en design text' developText='Detta är en develop text'/>
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


export default FoodMap;