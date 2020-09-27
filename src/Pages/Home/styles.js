import styled from "styled-components";
import { animated } from "react-spring";

import * as color from "../../Constants/colors";
import * as fonts from "../../Constants/fonts";
import * as size from "../../Constants/size";

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Intro = styled(animated.div)`
  font-size: ${size.large};
  color: ${color.grey};
  font-family: ${fonts.primary};
  line-height: 4.5rem;
  display: flex;
`;

const Name = styled(animated.div)`
  font-size: ${size.large};
  color: ${color.green};
  font-family: ${fonts.primary};
  line-height: 5.5rem;
`;

const SecondaryName = styled(animated.div)`
  font-size: 35px;
  color: ${color.grey};
  font-family: ${fonts.code};
  line-height: 1rem;
`;

const AnimatedSpan = styled(animated.span)`
  display: block;
`;

const AvatarWrapper = styled.div`
  > svg {
    width: 50%;
    height: 50%;
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
