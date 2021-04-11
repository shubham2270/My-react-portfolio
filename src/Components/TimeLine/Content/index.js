import React from "react";
import { useSpring, config } from "react-spring";

import {
  Circle,
  Line,
  CircleLineWrapper,
  TimeContent,
  Title,
  Description,
  TextWrapper,
} from "./styles";

const Content = ({ year, description }) => {
  const dotStyle = useSpring({
    from: {
      width: "0px",
      height: "0px",
    },
    to: {
      width: "15px",
      height: "15px",
    },
    config: {
      ...config.wobbly,
    },
  });
  const lineStyle = useSpring({
    from: {
      height: "0%",
    },
    to: {
      height: "100%",
    },
    delay: 400,
    config: {
      duration: 600,
      ...config.wobbly,
    },
  });
  return (
    <TimeContent>
      <CircleLineWrapper>
        <Circle style={dotStyle} />
        <Line style={lineStyle} />
      </CircleLineWrapper>
      <TextWrapper>
        <Title>{year}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </TimeContent>
  );
};

export default Content;
