import styled from "styled-components";

import { Heading as aboutHeading } from "../About/styles";
import * as fonts from "../../Constants/fonts";

const Heading = styled(aboutHeading)`
  line-height: 4.5rem;
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const SkillContent = styled.div`
  width: 60%;
`;

const SkillNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  font-family: ${fonts.monoCode};
  color: white;
  font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  height: 100%;
  align-items: center;
  > svg {
    width: 30px;
    height: 30px;
    padding-right: 0.5em;
  }
`;

export { Heading, SkillWrapper, SkillContent, SkillNameWrapper, IconWrapper };
