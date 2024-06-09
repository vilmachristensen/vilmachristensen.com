import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';

const Home: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Profile'/>
            <TextSection contentType='GetToKnow'/>
            <TextSection contentType='Projects'/>
            <TextSection contentType='Contact'/>
            <Footer/>
        </Content>
    )

}

const Content = styled.div`
display: grid; 
grid-template-rows: auto auto auto auto auto auto; 
gap: 0px;
background-color: ${Colors.white};
`;


export default Home;