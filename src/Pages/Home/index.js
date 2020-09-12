import React from "react";

import MainContainer from "../styles";
import { NameContainer, Intro, Name, SecondaryName } from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <NameContainer>
        <Intro>Hello, I'm</Intro>
        <Name>Shubham Kumar</Name>
        <SecondaryName>&lt;Front End Developer /&gt;</SecondaryName>
      </NameContainer>
    </MainContainer>
  );
};

export default Home;
