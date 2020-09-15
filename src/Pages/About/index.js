import React from "react";
import { useTrail, animated } from "react-spring";

import MainContainer from "../styles";
import { Heading, Content, AboutWrapper } from "./styles";
import Button from "../../Components/Button";

const About = () => {
  const trail = useTrail(5, { opacity: 1 });
  return (
    <MainContainer>
      <AboutWrapper>
        <Heading>About me</Heading>
        <Content>
          {trail.map((props) => (
            <animated.div style={props} />
          ))}{" "}
          I am a self-taught developer from India. My goal is to build
          full-stack websites and web applications using modern web
          technologies.
          <br /> <br />I have done Graphic web design/Development course from
          Arena Animation and also taken Full Stack Web Development course
          available online so that I can take my web skills to next level and
          also keep learning new technologies.
        </Content>{" "}
        <br /> <br />
        <Button
          link="https://drive.google.com/open?id=1qjMf_Umeb7Hd7AgYAd5BHP9_-CtyPqwU"
          name="Resume"
        />
      </AboutWrapper>
    </MainContainer>
  );
};

export default About;
