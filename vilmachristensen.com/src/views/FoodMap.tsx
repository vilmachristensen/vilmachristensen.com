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
            info="An application for adding, storing, and viewing your favorite restaurants and cafes with just the push of a button."
            gradientColor1='#7D1B2F'
            gradientColor2='#C96B7E'
            picture={FoodMapMockup} />
            <TextSection contentType='FoodMap' 
            designText='The design phase of the application was brief, as the primary focus of the project was on development. 
            Nevertheless, the design aimed to be simple, easy to understand, and user-friendly. A basic mid-fi prototype was 
            created for preliminary testing to ensure the application met these standards. The results of these tests were 
            considered during development, influencing elements such as icons and text in the navigation bar.' 
            developText="FoodMap was developed using Android Studio and Kotlin. The development was structured around activities, 
            a database, a ViewModel, and a data access object (DAO). Different activities were triggered based on the user's choices, 
            with each activity updating the UI by creating an instance of the ViewModel. The ViewModel was responsible for creating 
            instances of the DAO, which was used to modify or retrieve information from the database."/>
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