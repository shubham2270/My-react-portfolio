import styled from "styled-components";
import { animated } from "react-spring";

import { green } from "../../../Constants/colors";
import hand from "../../../Constants/cursor";
import * as font from "../../../Constants/fonts";

export const Circle = styled(animated.div)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${green};
  cursor: ${hand};
  margin-top: -1px;
`;

export const Line = styled(animated.div)`
  width: 4px;
  height: 100px;
  background: ${green};
  margin-top: -3px;
`;

export const CircleLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
`;

export const TimeContent = styled.div`
  /* background: black; */
  display: flex;
`;

export const Title = styled.div`
  color: ${green};
  padding: 0px 0px 10px 10px;
  font-family: ${font.monoCode};
  margin-top: -4px;
`;

export const Description = styled.div`
  font-family: ${font.secondary};
  color: ${green};
  font-size: 0.9rem;
  line-height: 1.3rem;
  padding: 0px 0px 10px 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
