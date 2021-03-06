import React from "react";
import Content from "./Content";

import { TimeLineWrapper } from "./styles";

const timelineData = [
  {
    year: "2018",
    description: " The year when I stared my coding journey learned HTML & CSS",
  },
  {
    year: "2019",
    description:
      "Learned Javascript, React Js build few projects Also got my first Front End Developer job in Nov",
  },
  {
    year: "2021",
    description: "Started working in Aicrowd from January as front end dev.",
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
