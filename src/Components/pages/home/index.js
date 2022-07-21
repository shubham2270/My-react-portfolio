/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

import MainContainer from "../../styles";
import useAnimations from "../../../animations/home/useAnimations";
import useMediaQuery from "../../../hooks/useMediaQuery";

import {
  NameContainer,
  Intro,
  Name,
  SecondaryName,
  AnimatedSpan,
  AvatarWrapper,
} from "./homeStyles";

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
    width: isSmallScreen ? "150px" : "700px",
    height: isSmallScreen ? "150px" : "auto",
    position: "absolute",
    bottom: isSmallScreen ? "10px" : "10px",
    left: isSmallScreen ? "auto" : "40%",
  };

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

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
        {/* <lottie-player
          src={"/assets/lottie/tech1.json"}
          background='transparent'
          speed='0.8'
          style={tech1}
          loop
          autoplay
        /> */}
        <AvatarWrapper>
          <lottie-player
            src='/assets/lottie/boyCoding.json'
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
