import styled from "styled-components";

import { Heading as aboutHeading } from "../About/styles";
import * as color from "../../Constants/colors";
import * as fonts from "../../Constants/fonts";
import * as size from "../../Constants/size";

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
    cursor: pointer;
    margin-top: 20px;
    list-style-type: square;
  }
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
`;

const ProjectImage = styled.div`
  background: pink;
  width: 100%;
  height: 175px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const ProjectInfo = styled.div`
  padding: 16px;
  line-height: 1.6rem;
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
};
