/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from "react";
import { useSpring } from "react-spring";

import MainContainer from "../styles";
import * as color from "../../Constants/colors";
import {
  NameContainer,
  Intro,
  Name,
  SecondaryName,
  AnimatedSpan,
} from "./styles";

const Home = () => {
  const [secondAnimate, setSecondAnimate] = useState(false);
  const introAnimation = useSpring({
    from: {
      transform: "translateX(-50px)",
      color: "brown",
    },
    to: {
      transform: secondAnimate ? "translateX(0px)" : "translateX(15px)",
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
    config: { duration: 1500 },
    delay: 500,
  });
  const secondaryNameAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 700 },
    delay: 1200,
  });

  const wavingHandAnimationDown = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(-20deg)" },
    config: { duration: 200 },
    delay: 300,
    reset: true,
    reverse: true,
  });

  return (
    <MainContainer>
      <NameContainer>
        <Intro style={introAnimation}>
          Hello, I'm
          <AnimatedSpan
            role="img"
            aria-label="wave hand"
            style={wavingHandAnimationDown}
          >
            👋
          </AnimatedSpan>
        </Intro>
        <Name style={nameAnimation}>Shubham Kumar</Name>
        <SecondaryName style={secondaryNameAnimation}>
          &lt;Front End Developer /&gt;
        </SecondaryName>
      </NameContainer>
    </MainContainer>
  );
};

export default Home;
