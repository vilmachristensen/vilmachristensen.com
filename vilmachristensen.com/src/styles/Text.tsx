import styled from 'styled-components';
import colors from './Colors';
import "@fontsource/raleway";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const Header_white = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 50px;
    font-weight: 700;
  
    max-width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }
`;

const Header_black = styled.text`
  color: ${colors.black};
  font-family: 'Raleway';
  font-size: 60px;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 50px;
    font-weight: 700;
  
    max-width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }
`;

const Default_text_big_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 22px;
    line-height: 32px;
    font-weight: 400;

    @media (max-width: 700px) {
      font-size: 16px;

      max-width: 100%;
      overflow-wrap: break-word;
      word-break: break-word;
    }
    `;

const Default_text_big_black = styled.text`
    color: ${colors.black};
    font-family: 'Raleway';
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
    
    @media (max-width: 700px) {
      font-size: 16px;

      max-width: 100%;
      overflow-wrap: break-word;
      word-break: break-word;
    }

    `;

const Header_medium_black = styled.text`
    color: ${colors.black};
    font-family: 'Raleway';
    font-size: 45px;
    line-height: 32px;
    font-weight: 700;

    @media (max-width: 700px) {
      font-size: 37px;
    }
  `;

const Header_medium_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 45px;
    line-height: 32px;
    font-weight: 700;

    @media (max-width: 700px) {
      font-size: 37px;
    }
  `;

const Header_small_white = styled.text`
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: 22px;
    line-height: 32px;
    font-weight: 700;

    @media (max-width: 700px) {
      font-size: 18px;
    }

  `;

const Header_small_black = styled.text`
  color: ${colors.black};
  font-family: 'Raleway';
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 18px;
  }

`;

const Default_text_white = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;

  @media (max-width: 700px) {
    font-size: 14px;
  }

`;

const Default_text_black = styled.text`
color: ${colors.black};
font-family: 'Raleway';
font-size: 18px;
line-height: 27px;
font-weight: 400;

@media (max-width: 700px) {
  font-size: 14px;
}
`;

const Footer_text = styled.text`
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: 700px) {
    font-size: 12px;
  }
`;


export { Header_small_white, Header_white, Header_black, Default_text_big_white, Default_text_big_black, Header_medium_black, Header_medium_white, Header_small_black, Default_text_white, Default_text_black, Footer_text };