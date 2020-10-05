/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "@lottiefiles/lottie-player";

import MainContainer from "../styles";
import useAnimations from "../../animations/home/useAnimations";
import useMediaQuery from "../../hooks/useMediaQuery";

import {
  NameContainer,
  Intro,
  Name,
  SecondaryName,
  AnimatedSpan,
  AvatarWrapper,
} from "./styles";

const Home = () => {
  const {
    nameAnimation,
    secondaryNameAnimation,
    wavingHandAnimationDown,
    introAnimation,
    cryptAnimationText,
  } = useAnimations();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const animationStyle = {
    width: isSmallScreen ? "200px" : "400px",
    height: isSmallScreen ? "200px" : "400px",
  };

  return (
    <MainContainer>
      <NameContainer>
        <div>
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
        </div>
        <AvatarWrapper>
          <lottie-player
            src="https://assets10.lottiefiles.com/private_files/lf30_WdTEui.json"
            background="transparent"
            speed="0.8"
            style={animationStyle}
            loop
            autoplay
          ></lottie-player>
        </AvatarWrapper>
      </NameContainer>
    </MainContainer>
  );
};

export default Home;
