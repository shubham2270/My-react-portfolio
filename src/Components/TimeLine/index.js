import React from "react";

import {
  TimeLineWrapper,
  Circle,
  Line,
  CircleLineWrapper,
  TimeContent,
  Title,
  Description,
  TextWrapper,
} from "./styles";

const TimeLine = () => {
  return (
    <TimeLineWrapper>
      <TimeContent>
        <CircleLineWrapper>
          <Circle />
          <Line />
        </CircleLineWrapper>
        <TextWrapper>
          <Title>2018</Title>
          <Description>
            The year when I stared my coding journey learned HTML & CSS
          </Description>
        </TextWrapper>
      </TimeContent>
      <TimeContent>
        <CircleLineWrapper>
          <Circle />
          <Line />
        </CircleLineWrapper>
        <TextWrapper>
          <Title>2019</Title>
          <Description>
            Learned Javascript, React Js build few projects Also get my first
            front end developer job in Nov
          </Description>
        </TextWrapper>
      </TimeContent>
    </TimeLineWrapper>
  );
};

export default TimeLine;
