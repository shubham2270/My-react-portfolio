import React from "react";
import "@lottiefiles/lottie-player";

import MainContainer from "../styles";
import { Content } from "../About/styles";
import {
  Heading,
  SkillWrapper,
  SkillContent,
  AnimationWrapper,
  StyledLink,
} from "./styles";

import LanguageAndTools from "./LanguageAndTools";
import useMediaQuery from "../../hooks/useMediaQuery";

const Skills = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const animationStyle = {
    width: isSmallScreen ? "100px" : "200px",
    height: isSmallScreen ? "100px" : "200px",
  };

  const githubUrl = "https://www.github.com/shubham2270";
  const linkedinUrl = "https://www.linkedin.com/in/shubham2270";
  const vectorAnimation =
    "https://assets2.lottiefiles.com/packages/lf20_snxqzipw.json";
  const unifizeUrl = "https://www.unifize.com/";

  return (
    <MainContainer>
      <SkillWrapper>
        <SkillContent>
          <AnimationWrapper>
            <Heading>Skills & Experience</Heading>
            <span>
              <lottie-player
                src={vectorAnimation}
                background="transparent"
                speed="0.8"
                style={animationStyle}
                loop
                autoplay
              ></lottie-player>
            </span>
          </AnimationWrapper>
          <Content>
            Have one year working experience as a Front end developer in{" "}
            <StyledLink
              href={unifizeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Unifize
            </StyledLink>{" "}
            a start up, using React Js, Redux, styled components etc , as main
            library and tools.
            <br /> <br />
            Beside I keep working on some side projects either for learning new
            things or just for fun, Checkout my{" "}
            <StyledLink
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </StyledLink>{" "}
            &{" "}
            <StyledLink
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin{" "}
            </StyledLink>{" "}
            for more info.
          </Content>
          <br /> <br />
        </SkillContent>
        <LanguageAndTools />
      </SkillWrapper>
    </MainContainer>
  );
};

export default Skills;