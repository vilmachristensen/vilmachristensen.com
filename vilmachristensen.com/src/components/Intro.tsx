import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Default_text_big, Default_text_white, Header, Header_medium_black, Header_medium_white } from '../styles/Text';
import Profilepicture from '../assets/Profilbild.jpg';
import Colors from '../styles/Colors';

const Intro: React.FC = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Content>
            <Section>
                <Left>
                    {windowWidth < 800 ?
                        <><Header_medium_white>Hi,
                            <br></br>
                            I’m Vilma Christensen</Header_medium_white><Default_text_white>
                                A passionate (and a bit nerdy 🤓) learner that loves front-end
                                development and making services easier to use
                            </Default_text_white></>
                        :
                        <><Header>Hi,
                            <br></br>
                            I’m Vilma Christensen</Header><Default_text_big>
                                A passionate (and a bit nerdy 🤓) learner that loves front-end
                                development and making services easier to use
                            </Default_text_big></>
                    }
                </Left>
            </Section>
            <Picture src={Profilepicture} />
        </Content>
    )
}


const Content = styled.div`
position: relative;
padding-bottom: 5%;
@media(min-width: 768px) {
    display: grid;
    grid-template-rows: auto auto;
  }
`;

const Section = styled.div`
display: grid;
grid-template-columns: 60% 40%; 
background-color: ${Colors.navy};
position: relative;

`;

const Left = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
  padding-top: 10%;
  padding-bottom: 25%;
  padding-left: 10%;
`;

const Picture = styled.img`
border-radius: 40px;
width: 30%;
position: absolute;
right: 5%;
top: -5%; 
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media (max-width: 700px) {
    position: relative;
    justify-self: center;
  }

`;

const Right = styled.div`

`;


export default Intro;