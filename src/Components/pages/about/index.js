import React from "react";
import Loader from "react-loader-spinner";
import Image from "next/image";

import MainContainer from "../../styles";
import useMediaQuery from "../../../hooks/useMediaQuery";
import {
  Heading,
  Content,
  AboutWrapper,
  MyPicture,
  AboutContent,
} from "./styles";
import Button from "../../Button";
import useBoolean from "../../../hooks/useBoolean";
import { green } from "../../../Constants/colors";
import useAnimations from "../../../animations/home/useAnimations";
import TimeLine from "../../TimeLine/index";

const About = () => {
  const { value: Error, setValue: setError } = useBoolean(false);
  const { value: isLoading, setValue: setIsLoading } = useBoolean(true);
  const { introAnimation, nameAnimation } = useAnimations();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
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
            link='https://drive.google.com/open?id=1qjMf_Umeb7Hd7AgYAd5BHP9_-CtyPqwU'
            name='Resume'
          />
        </AboutContent>

        {/* Hide on small screens */}
        {!isSmallScreen && <TimeLine />}

        {/* {!Error && (
          <Image
            src={shubham}
            onLoad={() => setIsLoading(false)}
            onError={() => setError(true)}
            width={200}
            height={400}
            layout='responsive'
          />
          // <MyPicture
          //   style={nameAnimation}
          //   src={shubham}
          //   onLoad={() => setIsLoading(false)}
          //   onError={() => setError(true)}
          // />
        )} */}

        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            // display: "block",
            display: isLoading ? "grid" : "block",
            placeItems: "center",
          }}
        >
          {isLoading && !Error && (
            <Loader type='Circles' color={green} height={70} width={70} />
          )}
          <Image
            src='/assets/shubham.jpg'
            onLoad={() => setIsLoading(false)}
            // onError={() => setError(true)}
            width={500}
            height={500}
            layout='responsive'
          />
        </div>
      </AboutWrapper>
    </MainContainer>
  );
};

export default About;
