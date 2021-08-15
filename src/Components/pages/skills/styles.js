import styled from "styled-components";

import { Heading as aboutHeading } from "../about/styles";
import * as fonts from "../../../Constants/fonts";
import { green } from "../../../Constants/colors";
import hand from "../../../Constants/cursor";
import { device } from "../../../Constants/screen";

const Heading = styled(aboutHeading)`
  line-height: 4.5rem;
  @media ${device.tablet} {
    line-height: 2.5rem;
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const SkillContent = styled.div`
  width: 60%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const AnimationWrapper = styled.div`
  display: flex;
  align-items: center;
  > span {
    padding-bottom: 2em;
  }
`;

const StyledLink = styled.a`
  color: ${green};
  cursor: ${hand};
`;

export { Heading, SkillWrapper, SkillContent, AnimationWrapper, StyledLink };
