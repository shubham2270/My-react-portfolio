import React from "react";

import MainContainer from "../styles";
import { Heading, Content, AboutWrapper, Resume } from "./styles";

const About = () => {
  return (
    <MainContainer>
      <AboutWrapper>
        <Heading>About me</Heading>
        <Content>
          I am a self-taught developer from India. My goal is to build
          full-stack websites and web applications using modern web
          technologies.
          <br /> <br />I have done Graphic web design/Development course from
          Arena Animation and also taken Full Stack Web Development course
          available online so that I can take my web skills to next level and
          also keep learning new technologies.
        </Content>{" "}
        <br /> <br />
        <Resume
          target="_blank"
          href="https://drive.google.com/open?id=1qjMf_Umeb7Hd7AgYAd5BHP9_-CtyPqwU"
        >
          Resume
        </Resume>
      </AboutWrapper>
    </MainContainer>
  );
};

export default About;
