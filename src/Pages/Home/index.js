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
  const childThinking = {
    width: isSmallScreen ? "200px" : "400px",
    height: isSmallScreen ? "200px" : "400px",
  };

  const tech1 = {
    width: isSmallScreen ? "150px" : "300px",
    height: isSmallScreen ? "150px" : "300px",
    position: "absolute",
    bottom: isSmallScreen ? "10px" : "70px",
    left: isSmallScreen ? "auto" : "40%"
  }

  return (
    <MainContainer>
      <NameContainer>
        <div>
          <Intro style={introAnimation}>
            Hello, I'm
            <AnimatedSpan
              role='img'
              aria-label='wave hand'
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
        <lottie-player
          src={"https://assets1.lottiefiles.com/packages/lf20_SGpOhb.json"}
          background='transparent'
          speed='0.8'
          style={tech1}
          loop
          autoplay
        />
        <AvatarWrapper>
          <lottie-player
            src='https://assets10.lottiefiles.com/private_files/lf30_WdTEui.json'
            background='transparent'
            speed='0.8'
            style={childThinking}
            loop
            autoplay
          />
        </AvatarWrapper>
      </NameContainer>
    </MainContainer>
  );
};

export default Home;
