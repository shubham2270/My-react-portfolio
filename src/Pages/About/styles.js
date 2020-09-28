import styled from "styled-components";

import * as color from "../../Constants/colors";
import * as fonts from "../../Constants/fonts";
import * as size from "../../Constants/size";

const Heading = styled.div`
  color: ${color.grey};
  font-size: ${size.large};
  font-family: ${fonts.primary};
  padding-bottom: 20px;
`;

const Content = styled.div`
  color: ${color.white};
  font-size: ${size.medium};
  font-display: ${fonts.secondary};
  line-height: 1.5rem;
`;

const AboutWrapper = styled.div`
  width: 90%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 500px;
`;

const MyPicture = styled.img`
  width: 40%;
`;

const AboutContent = styled.div`
  width: 550px;
`;

export { Heading, Content, AboutWrapper, MyPicture, AboutContent };
