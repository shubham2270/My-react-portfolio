/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import MainContainer from "../styles";
import useAnimations from "../../animations/useAnimations";
import {
  NameContainer,
  Intro,
  Name,
  SecondaryName,
  AnimatedSpan,
} from "./styles";

const Home = () => {
  const {
    nameAnimation,
    secondaryNameAnimation,
    wavingHandAnimationDown,
    introAnimation,
    cryptAnimationText,
    myRef,
  } = useAnimations();

  return (
    <MainContainer ref={myRef}>
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
          &lt;{cryptAnimationText} /&gt;
        </SecondaryName>
      </NameContainer>
    </MainContainer>
  );
};

export default Home;
