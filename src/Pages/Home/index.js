/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import MainContainer from "../styles";
import useAnimations from "../../animations/home/useAnimations";
import { ReactComponent as Avatar } from "../../Assets/Vector/avatar.svg";

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
          <Avatar />
        </AvatarWrapper>
      </NameContainer>
    </MainContainer>
  );
};

export default Home;
