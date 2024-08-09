import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import UmeaStigenMockup from '../assets/UmeaStigen_mockup.png'

const UmeaStigen: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='UmeaStigen' header='Umeå Stigen' 
            info='A web application that combines two APIs, allowing users to discover various trails around Umeå'
            course='Applications Development for Internet'
            tools='React, JavaScript, MapBox API, Open Data Umeå API'
            gradientColor1='#606951'
            gradientColor2='#ACB597'
            picture={UmeaStigenMockup} />
            <TextSection contentType='UmeaStigen' 
            designText="Once a finalized idea was established, the design process for the application began. To initiate creativity, 
            a moodboard was created, incorporating colors, images, illustrations, and words associated with hiking, nature, and Umeå. 
            This served as a reference point for styling the final application. Simultaneously, a preliminary logo was developed for 
            later use. A wireframe was then created for the application's layout, producing a grayscale lo-fi prototype. This prototype 
            included a map, an overlay with clickable trails, and a header with a potential logo, forming the foundation for the final 
            design phase." 
            developText='The project was developed in React using JavaScript, with most of the development focused on integrating two APIs. 
            Data about various trails in Umeå was fetched from Open Data Umeå using an API key, and the trails were displayed in a 
            list for the user. When a user selected a trail, the coordinates for that specific trail were sent to Mapbox, 
            the other API used. Mapbox allowed the application to display the trails on a customizable, interactive, and 
            user-friendly map.'/>
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