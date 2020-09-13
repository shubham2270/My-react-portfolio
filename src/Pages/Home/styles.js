import styled from "styled-components";
import { animated } from "react-spring";

import * as color from "../../Constants/colors";
import * as fonts from "../../Constants/fonts";
import * as size from "../../Constants/size";

const NameContainer = styled.div`
  width: 50%;
`;

const Intro = styled(animated.div)`
  font-size: ${size.large};
  color: ${color.grey};
  font-family: ${fonts.primary};
  line-height: 4.5rem;
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

export { NameContainer, Intro, Name, SecondaryName };
