import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Colors from '../styles/Colors';
import TextSection from '../components/TextSection';
import ActusMockup from '../assets/Actus/Actus_mockup.png';
import ActusResults1 from '../assets/Actus/Actus_results1.png'
import ActusResults2 from '../assets/Actus/Actus_results2.png'

const Actus: React.FC = () => {

    return (
        <Content>
            <Navbar></Navbar>
            <Intro contentType='Actus' header='Actus' 
            course='Innovative mobile services and systems'
            tools='React Native, Expo, Google Vision, OpenAI, TypeScript, Firebase, Git, SCRUM'
            info="An application that provides daily tasks tailored to the abilities of elderly users, aiming to enhance memory, 
            physical movement, and technological familiarity."
            gradientColor1='#22244E'
            gradientColor2='#E351A8'
            picture={ActusMockup} />
            <TextSection contentType='Actus' 
            designText='In the initial phase of the design process, each team member created their own sketch of the application on a whiteboard,
             which was then presented to the group. The sketches were discussed collectively, with an emphasis on their strengths and weaknesses. 
             The strengths were consolidated into a single HiFi prototype, which was tested with several individuals of the target group before being 
             finalized and developed in Figma.' developText='The application was developed using React Native with Expo and written in TypeScript, with Firebase 
             serving as the database for storing all tasks.
             Firestore was selected, as data storage option, for its document and collection structure, which facilitates efficient data access and simpler query management. 
             Additionally, Firestore’s superior scalability was deemed crucial for 
             the project’s replicability. For image analysis, Google Vision’s "image labeling" feature was used to interpret 
             user-uploaded images and generate labels, which were then processed by OpenAI. This integration enabled the creation 
             of relevant questions based on the image content to prompt user reflection and memory recall.'
             devResults={[ActusResults1, ActusResults2]}
             />
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


export default Actus;