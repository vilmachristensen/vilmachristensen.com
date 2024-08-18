import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    Default_text_big_white, Default_text_big_black, Default_text_black, Default_text_white,
    Header_white, Header_black, Header_medium_black, Header_medium_white
} from '../styles/Text';
import Profilepicture from '../assets/Profile_picture.jpg'
import Colors from '../styles/Colors';


interface IntroProps {
    contentType: string,
    header?: string,
    info?: string,
    course?: string,
    tools?: string,
    gradientColor1?: string,
    gradientColor2?: string,
    picture?: any,
}

const Intro: React.FC<IntroProps> = ({ contentType, header, info, course, tools, gradientColor1, gradientColor2, picture }) => {

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
                    <Left content={contentType}>
                        <><Header_white>Hi,
                            <br></br>
                            I’m Vilma Christensen</Header_white><Default_text_big_white>
                                An ambitious (and a bit nerdy 🤓) software developer who enjoys front-end
                                development and making services easier to use. Explore my projects
                                below or <Link href='mailto:vilma.m.christensen@gmail.com'>contact me</Link> right away!
                            </Default_text_big_white></>
                    </Left>
                </Section><ProfilePicture src={Profilepicture} /></>
                : (contentType === "Kurr Ads Manager" || contentType === "Recipes2Rescue") ?
                    <><Section content='Project' gradientColor1={gradientColor1 || ''} gradientColor2={gradientColor2 || ''} >
                        <Left content={contentType}>

                            <><Header_black>{header}</Header_black>
                                <Default_text_big_black>
                                    <i>{info}</i>
                                </Default_text_big_black>
                                <Default_text_big_black>
                                    <b>Course:</b> {course}
                                </Default_text_big_black>
                                <Default_text_big_black>
                                    <b>Tools:</b> {tools}
                                </Default_text_big_black></>
                        </Left>
                    </Section><Picture content={contentType} src={picture} /></>

                    : <><Section content='Project' gradientColor1={gradientColor1 || ''} gradientColor2={gradientColor2 || ''} >
                        <Left content={contentType}>
                            <><Header_white>{header}</Header_white>
                                <Default_text_big_white>
                                    <i>{info}</i>
                                </Default_text_big_white>
                                <Default_text_big_white>
                                    <b>Course:</b> {course}
                                </Default_text_big_white>
                                <Default_text_big_white>
                                    <b>Tools:</b> {tools}
                                </Default_text_big_white></>
                        </Left>
                    </Section><Picture content={contentType} src={picture} /></>
            }

        </Content>
    )
}


const Content = styled.div`
position: relative;
padding-bottom: 0%;
@media(max-width: 560px) {
    display: grid;
    grid-template-rows: auto auto;
  }
`;

const Section = styled.div<{ gradientColor1: string, gradientColor2: string, content: string }>`
display: grid;
grid-template-columns: ${(props) => (props.content !== "Profile" ? '50% 50%' : '60% 40%')};
background-image: linear-gradient(170deg, ${(props) => (props.gradientColor1)}, ${(props) => (props.gradientColor2)});
position: relative;

@media (max-width: 560px) {
    grid-template-columns: 100%;
  }
  
`;

const Link = styled.a`
text-decoration: none;
color: #FBE87C;
font-weight: 600;

&:hover {
    cursor: pointer;
    opacity: 80%;
}
`;

const Left = styled.div<{ content: string }>`
  display: grid;
  grid-template-rows: auto auto;
  gap: 20px;
  padding-top: 10%;
  padding-bottom: 32%;
  padding-left: 13%;

  @media (max-width: 560px) {
    position: relative;
    padding-top: ${(props) => (props.content == "FoodMap" || props.content == "HotSpot" ? '65%' : props.content == "Actus" ? '60%' : props.content == "Recipes2Rescue" ? '53%' : '43%')};
    padding-bottom: 20%;
    padding-right: 10%;
  }
`;

const ProfilePicture = styled.img`
border-radius: 40px;
width: 28%;
position: absolute;
right: 7%;
top: -5%; 
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

@media (max-width: 560px) {
    width: 45%;
    top: -4%; 

`;

const Picture = styled.img<{ content: string }>`
max-width: 42%;
max-height: 90%;
position: absolute;
right: ${(props) => (props.content == "Kurr Ads Manager" ? '5%' : props.content == "FoodMap" || props.content == "HotSpot" ? '10%' : '5%')};
top: ${(props) => (props.content == "LandLog" ? '-16%' : '-5%')};

@media (max-width: 560px) {
max-width: ${(props) => (props.content == "FoodMap" ? '30%' : props.content == "Kurr Ads Manager" || props.content == "UmeaStigen" || props.content == "LandLog" || props.content == "Luckan" || props.content == "Actus" ? '60%' : '50%')};
top: ${(props) => (props.content == "LandLog" ? '-5%' : '-2%')};
right: ${(props) => (props.content == "Kurr Ads Manager" || props.content == "UmeaStigen" ? '10%' : props.content == "FoodMap" || props.content == "HotSpot" || props.content == "Actus" ? '10%' : props.content == "Recipes2Rescue" ? '20%' : '5%')};
}

`;

export default Intro;