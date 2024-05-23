import React from 'react';
import styled from 'styled-components';
import Actus from '../assets/Actus_mockup.png'
import FoodMap from '../assets/FoodMap_mockup.png'
import HotSpot from '../assets/HotSpot_mockup.png'
import KurrAdsManager from '../assets/KurrAdsManager_mockup.png'
import Recipes2Rescue from '../assets/Recipes2Rescue_mockup.png'
import UmeaStigen from '../assets/UmeaStigen_mockup.png'
import { Header_small_white, Header_small_black, Default_text_white, Default_text_black } from '../styles/Text';


interface ProjectCardProps {
  name: string,
}

const projectContent: { [key: string]: { header: string, text: string, img: string, gradientColor1: string, gradientColor2: string } } = {
  "Actus": { header: "Actus", text: "React Native | Expo | Google Vision | OpenAI | TypeScript | Firebase | Git | SCRUM", img: Actus, gradientColor1: "#22244E", gradientColor2: "#E351A8" },
  "Kurr Ads Manager": { header: "Kurr Ads Manager", text: "React | TypeScript | Figma | Git", img: KurrAdsManager, gradientColor1: "#FF9B7F", gradientColor2: "#FED9CF" },
  "HotSpot": { header: "HotSpot", text: "React Native | Expo | Google Maps API | TypeScript | Firebase | Git | SCRUM", img: HotSpot, gradientColor1: "#D03853", gradientColor2: "#E2977D" },
  "FoodMap": { header: "FoodMap", text: "Android Studio | Kotlin", img: FoodMap, gradientColor1: "#7D1B2F", gradientColor2: "#C96B7E" },
  "Umeå Stigen": { header: "Umeå Stigen", text: "React | JavaScript | MapBox API | Umeå API", img: UmeaStigen, gradientColor1: "#606951", gradientColor2: "#ACB597" },
  "Recipes2Rescue": { header: "Recipes2Rescue", text: "Figma | Google Forms", img: Recipes2Rescue, gradientColor1: "#BBCE8A", gradientColor2: "#FFFBDB" },
};

const getProjectContent = (name: string) => {
  const project = projectContent[name];
  return (
    <Card gradientColor1={project.gradientColor1} gradientColor2={project.gradientColor2}>
        <img src={project.img}  alt={project.header} style={{ justifySelf: "center", alignSelf:"center", maxWidth: "90%", maxHeight: "400px" }} />
        <TextContent>
        {name === "Kurr Ads Manager" || name === "Recipes2Rescue"  ?
          <>
            <Header_small_black>{project.header}</Header_small_black>
            <Default_text_black>{project.text}</Default_text_black>
          </>
          :
          <>
            <Header_small_white>{project.header}</Header_small_white>
            <Default_text_white>{project.text}</Default_text_white>
          </>
        }
        </TextContent>
    </Card>

  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name }) => {
  return (
    <div>
      {getProjectContent(name)}
    </div>
  );
};

const Card = styled.div<{ gradientColor1: string, gradientColor2: string }>`
display: grid;
grid-template-rows: 1fr auto;
height: 584px;
width: inherit;
border-radius: 20px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
background-image: linear-gradient(170deg, ${(props) => (props.gradientColor1)}, ${(props) => (props.gradientColor2)});
transition: transform 0.3s ease;

&:hover {
    transform: scale(1.02);
}

`;

const TextContent = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: 10px;
  padding: 30px;p
  justify-self: left;
`;


export default ProjectCard;

//grid-template-rows: 2.6fr 0.2fr 0.2fr; 