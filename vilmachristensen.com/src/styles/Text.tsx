import styled from 'styled-components';
import colors from './Colors';
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const Header = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 70px;
  line-space: 24px;
  font-weight: 700;
`;

const Header_responsive = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 55px;
  line-space: 24px;
  font-weight: 700;
`;

const Default_text_big = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 25px;
    line-space: 24px;
    font-weight: 400;
    `;

const Header_medium_black = styled.text`
    color: ${colors.black};
    font-family: 'Raleway';
    font-size: 50px;
    line-space: 24px;
    font-weight: 700;
  `;

  const Header_medium_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 50px;
    line-space: 24px;
    font-weight: 700;
  `;

const Header_small_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 25px;
    line-space: 24px;
    font-weight: 700;
  `;

const Header_small_black = styled.text`
  color: ${colors.black};
  font-family: 'Raleway';
  font-size: 25px;
  line-space: 24px;
  font-weight: 700;
`;

const Default_text_white = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 20px;
  line-space: 40px;
  font-weight: 400;
`;

const Default_text_black = styled.text`
color: ${colors.black};
font-family: 'Raleway';
font-size: 20px;
line-space: 40px;
font-weight: 400;
`;


export { Header_small_white, Header, Header_responsive, Default_text_big, Header_medium_black, Header_medium_white, Header_small_black, Default_text_white, Default_text_black };