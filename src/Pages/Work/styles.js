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

const ProjectWrapper = styled.div`
  width: 384px;
  background: ${color.grey};
  position: absolute;
  right: 12em;
  top: 5em;
  padding-bottom: 16px;
`;

const SubWrapper = styled.div`
  position: relative;
  top: -2em;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 175px;
  overflow: hidden;
  > img {
    width: 110%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;

const ProjectInfo = styled.div`
  padding: 16px;
  line-height: 1.6rem;
  max-height: 150px;
  overflow: auto;
`;

const WebProjectVector = styled.div`
  position: absolute;
  right: 7em;
  top: 8em;
  > svg {
    width: 500px;
    height: 50%;
  }
`;

export {
  Heading,
  StyledList,
  Wrapper,
  ProjectWrapper,
  SubWrapper,
  ProjectImage,
  ButtonWrapper,
  ProjectInfo,
  WebProjectVector,
  ListWrapper,
};
