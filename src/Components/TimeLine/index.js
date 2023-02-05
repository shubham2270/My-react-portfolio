import React from "react";
import Content from "./Content";

import { TimeLineWrapper } from "./styles";

const timelineData = [
  {
    year: "2018",
    description:
      "The year when I started my coding journey learned HTML & CSS.",
  },
  {
    year: "2019",
    description:
      "Learned Javascript, React Js build projects also got my first Frontend Developer job in Nov at Unifize!",
  },
  {
    year: "2021",
    description: "Started working in AIcrowd from January as Frontend Dev.",
  },
  {
    year: "2022",
    description: "Currently working in Zuddl from Sep as Frontend Dev.",
  },
];

const TimeLine = () => {
  return (
    <TimeLineWrapper>
      {timelineData.map((data) => {
        const { year, description } = data;
        return <Content year={year} description={description} key={year} />;
      })}
    </TimeLineWrapper>
  );
};

export default TimeLine;
