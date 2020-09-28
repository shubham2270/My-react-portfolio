import React from "react";
import { useTrail, animated } from "react-spring";
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

const About = () => {
  const { value: Error, setValue: setError } = useBoolean(false);
  const { value: isLoading, setValue: setIsLoading } = useBoolean(true);
  const trail = useTrail(5, { opacity: 1 });
  return (
    <MainContainer>
      <AboutWrapper>
        <AboutContent>
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
        </AboutContent>
        {isLoading && !Error && (
          <Loader type="Circles" color={green} height={70} width={70} />
        )}

        {!Error && (
          <MyPicture
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
