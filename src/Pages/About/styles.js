import styled from "styled-components";
import { animated } from "react-spring";

import * as color from "../../Constants/colors";
import * as fonts from "../../Constants/fonts";
import * as size from "../../Constants/size";
import { device } from "../../Constants/screen";

const Heading = styled(animated.div)`
  color: ${color.grey};
  font-size: ${size.large};
  font-family: ${fonts.primary};
  padding-bottom: 20px;
  @media ${device.tablet} {
    font-size: 2.5em;
    padding-bottom: 10px;
  }
`;

const Content = styled(animated.div)`
  color: ${color.white};
  font-size: ${size.medium};
  font-display: ${fonts.secondary};
  line-height: 1.5rem;
  @media ${device.tablet} {
    font-size: 0.9rem;
  }
`;

const AboutWrapper = styled.div`
  width: 90%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 500px;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const MyPicture = styled(animated.img)`
  width: 35%;
`;

const AboutContent = styled.div`
  width: 400px;
  @media ${device.tablet} {
    width: auto;
  }
`;

export { Heading, Content, AboutWrapper, MyPicture, AboutContent };
