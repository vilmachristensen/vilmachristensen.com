import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    Default_text_big_white, Default_text_big_black, Default_text_black, Default_text_white,
    Header_white, Header_black, Header_medium_black, Header_medium_white, Header_responsive_white,
    Header_responsive_black
} from '../styles/Text';
import Profilepicture from '../assets/Profilbild.jpg';
import Colors from '../styles/Colors';


interface IntroProps {
    contentType: string,
    header?: string,
    course?: string,
    tools?: string,
    gradientColor1?: string,
    gradientColor2?: string,
    picture?: any,
}

const Intro: React.FC<IntroProps> = ({ contentType, header, course, tools, gradientColor1, gradientColor2, picture }) => {

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
            {contentType == "Profile" ?
                <><Section content='Profile' gradientColor1={Colors.navy} gradientColor2={Colors.navy}>
                    <Left>
                        {windowWidth < 800 ?
                            <><Header_responsive_white>Hi,
                                <br></br>
                                I’m Vilma Christensen</Header_responsive_white>
                                <Default_text_white>
                                    A passionate (and a bit nerdy 🤓) learner that loves front-end
                                    development and making services easier to use
                                </Default_text_white></>
                            :
                            <><Header_white>Hi,
                                <br></br>
                                I’m Vilma Christensen</Header_white><Default_text_big_white>
                                    A passionate (and a bit nerdy 🤓) learner that loves front-end
                                    development and making services easier to use
                                </Default_text_big_white></>}
                    </Left>
                </Section><ProfilePicture src={Profilepicture} /></>
                : (contentType === "Kurr Ads Manager" || contentType === "Recipes2Rescue" || contentType === "Luckan") ?
                    <><Section content='Project' gradientColor1={gradientColor1 || ''} gradientColor2={gradientColor2 || ''} >
                        <Left>
                            {windowWidth < 800 ?
                                <><Header_responsive_black>{header}</Header_responsive_black>
                                    <Default_text_black>
                                        <b>Course:</b> {course}
                                    </Default_text_black>
                                    <Default_text_black>
                                        <b>Tools:</b> {tools}
                                    </Default_text_black></>
                                :
                                <><Header_black>{header}</Header_black><Default_text_big_black>
                                    <b>Course:</b> {course}
                                </Default_text_big_black>
                                    <Default_text_big_black>
                                        <b>Tools:</b> {tools}
                                    </Default_text_big_black></>}
                        </Left>
                    </Section><Picture content={contentType} src={picture} /></>

                    : <><Section content='Project' gradientColor1={gradientColor1 || ''} gradientColor2={gradientColor2 || ''} >
                        <Left>
                            {windowWidth < 800 ?
                                <><Header_responsive_white>{header}</Header_responsive_white>
                                    <Default_text_white>
                                        <b>Course:</b> {course}
                                    </Default_text_white>
                                    <Default_text_white>
                                        <b>Tools:</b> {tools}
                                    </Default_text_white></>
                                :
                                <><Header_white>{header}</Header_white><Default_text_big_white>
                                    <b>Course:</b> {course}
                                </Default_text_big_white>
                                    <Default_text_big_white>
                                        <b>Tools:</b> {tools}
                                    </Default_text_big_white></>}
                        </Left>
                    </Section><Picture content={contentType} src={picture} /></>
            }

        </Content>
    )
}


const Content = styled.div`
position: relative;
padding-bottom: 0%;
@media(min-width: 768px) {
    display: grid;
    grid-template-rows: auto auto;
  }
`;

const Section = styled.div<{ gradientColor1: string, gradientColor2: string, content: string }>`
display: grid;
grid-template-columns: ${(props) => (props.content !== "Profile" ? '50% 50%' : '60% 40%')};
background-image: linear-gradient(170deg, ${(props) => (props.gradientColor1)}, ${(props) => (props.gradientColor2)});
position: relative;
`;

const Left = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
  padding-top: 10%;
  padding-bottom: 35%;
  padding-left: 13%;

  @media (max-width: 560px) {
    position: relative;
    padding-top: 90%;
  }
`;

const ProfilePicture = styled.img`
border-radius: 40px;
width: 30%;
position: absolute;
right: 7%;
top: -5%; 
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

const Picture = styled.img<{ content: string }>`
max-width: 45%;
max-height: 100%;
position: absolute;
right: ${(props) => (props.content == "Kurr Ads Manager" ? '5%' : props.content == "FoodMap" || props.content == "HotSpot" ? '10%' : '5%')};
top: ${(props) => (props.content == "LandLog" ? '-16%' : '-5%')};

@media (max-width: 560px) {
max-width: ${(props) => (props.content == "FoodMap" ? '30%' : props.content == "Kurr Ads Manager" || props.content == "UmeaStigen" || props.content == "LandLog" || props.content == "Luckan" || props.content == "Actus" ? '60%' : '50%')};
top: ${(props) => (props.content == "LandLog" ? '-8%' : '-5%')};
  }
`;

export default Intro;