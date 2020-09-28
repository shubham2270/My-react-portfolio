import React from "react";

import MainContainer from "../styles";
import { Content } from "../About/styles";
import { Heading, SkillWrapper, SkillContent } from "./styles";

const Skills = () => {
  return (
    <MainContainer>
      <SkillWrapper>
        <SkillContent>
          <Heading>Skills & Experience</Heading>
          <Content>
            Currently I am working as a Front end developer in Unifize a start
            up, using React Js, Redux, styled components etc , as main library
            and tools.
            <br /> <br />
            Beside I keep working on some side projects either for learning new
            things or just for fun, Checkout my Github & Linkedin for more info.
          </Content>
          <br /> <br />
        </SkillContent>
      </SkillWrapper>
    </MainContainer>
  );
};

export default Skills;
