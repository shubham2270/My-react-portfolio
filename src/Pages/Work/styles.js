import styled, { css } from "styled-components";
import { animated } from "react-spring";

import { Heading as aboutHeading } from "../About/styles";
import * as color from "../../Constants/colors";
import hand from "../../Assets/cursors/hand.png";

const Heading = styled(aboutHeading)`
  line-height: 4rem;
  font-size: 3em;
`;

const StyledList = styled.ul`
  display: grid;
  justify-content: flex-start;
  height: 250px;
  padding-left: 16px;

  > li {
    &:nth-child(1) {
      margin-top: 0px;
    }
    cursor: url(${hand}), auto;
    margin-top: 20px;
    list-style-type: square;
  }
`;

const ListWrapper = styled(animated.div)`
  cursor: url(${hand}), auto;
  &:hover {
    color: ${color.green};
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: bold;
      font-size: 1.3rem;
      color: ${color.green};
    `};
`;

const Wrapper = styled.div`
  width: 60%;
`;

const ProjectWrapper = styled(animated.div)`
  width: 500px;
  background: ${color.grey};
  position: absolute;
  right: 12em;
  top: 10em;
`;

const SubWrapper = styled.div`
  position: relative;
  top: -2em;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 110%;
  }
`;

const IconWrapper = styled(animated.div)`
  height: 45px;
  width: 30%;
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  > a {
    transform: scale(0);
  }
  > a > svg {
    width: 80%;
    height: 80%;
    fill: ${color.green};
    cursor: url(${hand}), auto;
  }
`;

const ProjectInfo = styled(animated.div)`
  padding: 16px;
  line-height: 1.6rem;
  max-height: 150px;
  overflow: auto;
`;

const WebProjectVector = styled(animated.div)`
  position: absolute;
  right: 7em;
  top: 8em;
  > svg {
    width: 500px;
    height: 50%;
  }
`;

const PreviousDesign = styled.div`
  color: #fff;
  border: 2px solid yellow;
  padding: 8px;
  position: absolute;
  right: 1em;
  top: 1em;
  color: yellow;
  cursor: url(${hand}), auto;
`;

const StyledImage = styled.img`
  ${(props) => props.loading && "display: none"};
`;

const Slider = styled(animated.div)`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top: 2px solid ${color.green};
  box-sizing: border-box;
`;

const GifBackground = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.gif})`};
`;

const DecorativeGif = styled.img`
  width: 50%;
  height: 35px;
  position: absolute;
  top: 5px;
  right: 5px;
  background-size: cover;
`;

export {
  Heading,
  StyledList,
  Wrapper,
  ProjectWrapper,
  SubWrapper,
  ProjectImage,
  IconWrapper,
  ProjectInfo,
  WebProjectVector,
  ListWrapper,
  PreviousDesign,
  StyledImage,
  GifBackground,
  Slider,
  DecorativeGif,
};
