import styled from "styled-components";
import { animated } from "react-spring";

import * as color from "../Constants/colors";
import * as fonts from "../Constants/fonts";
import * as size from "../Constants/size";
import { device } from "../Constants/screen";

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  @media ${device.tablet} {
    flex-direction: column-reverse;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const Intro = styled(animated.div)`
  font-size: ${size.large};
  color: ${color.grey};
  font-family: ${fonts.primary};
  line-height: 4.5rem;
  display: flex;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 0rem;
  }
`;

const Name = styled(animated.div)`
  font-size: ${size.large};
  color: ${color.green};
  font-family: ${fonts.primary};
  line-height: 5.5rem;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 4.5rem;
  }
`;

const SecondaryName = styled(animated.div)`
  font-size: 35px;
  color: ${color.grey};
  font-family: ${fonts.code};
  line-height: 1rem;
  @media ${device.tablet} {
    font-size: 1.5rem;
    line-height: 0rem;
  }
`;

const AnimatedSpan = styled(animated.span)`
  display: block;
`;

const AvatarWrapper = styled.div`
  @media ${device.tablet} {
    padding-bottom: 2em;
  }
`;

export {
  NameContainer,
  Intro,
  Name,
  SecondaryName,
  AnimatedSpan,
  AvatarWrapper,
};
