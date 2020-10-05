import React from "react";
import Loader from "react-loader-spinner";

import MainContainer from "../styles";
import {
  Heading,
  Content,
  AboutWrapper,
  MyPicture,
  AboutContent,
} from "./styles";
import Button from "../../Components/Button";
import shubham from "../../Assets/shubham.jpg";
import useBoolean from "../../hooks/useBoolean";
import { green } from "../../Constants/colors";
import useAnimations from "../../animations/home/useAnimations";
import TimeLine from "../../Components/TimeLine/index";

const About = () => {
  const { value: Error, setValue: setError } = useBoolean(false);
  const { value: isLoading, setValue: setIsLoading } = useBoolean(true);
  const { introAnimation, nameAnimation } = useAnimations();
  return (
    <MainContainer>
      <AboutWrapper>
        <AboutContent>
          <Heading style={introAnimation}>About me</Heading>
          <Content style={nameAnimation}>
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
        </AboutContent>
        {isLoading && !Error && (
          <Loader type="Circles" color={green} height={70} width={70} />
        )}
        {/* <TimeLine /> */}

        {!Error && (
          <MyPicture
            style={nameAnimation}
            src={shubham}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
          />
        )}
      </AboutWrapper>
    </MainContainer>
  );
};

export default About;
