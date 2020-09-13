import React, { useState } from "react";
import { useSpring } from "react-spring";

import MainContainer from "../styles";
import * as color from "../../Constants/colors";
import { NameContainer, Intro, Name, SecondaryName } from "./styles";

const Home = () => {
  const [secondAnimate, setSecondAnimate] = useState(false);
  const introAnimation = useSpring({
    from: {
      transform: "translateX(-50px)",
      color: "brown",
    },
    to: {
      transform: "translateX(0px)",
      color: color.grey,
    },
    config: {
      duration: 300,
    },
    onRest: () => setSecondAnimate(true),
  });

  const nameAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1700 },
    delay: 500,
  });
  const secondaryNameAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 700 },
    delay: 1200,
  });
  console.log("secondAnimate:::", secondAnimate);
  return (
    <MainContainer>
      <NameContainer>
        <Intro style={introAnimation}>Hello, I'm</Intro>
        <Name style={nameAnimation}>Shubham Kumar</Name>
        <SecondaryName style={secondaryNameAnimation}>
          &lt;Front End Developer /&gt;
        </SecondaryName>
      </NameContainer>
    </MainContainer>
  );
};

export default Home;
