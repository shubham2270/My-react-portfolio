import React from "react";

import MainContainer from "../styles";
import { Content } from "../About/styles";
import {
  Heading,
  SkillWrapper,
  SkillContent,
  SkillNameWrapper,
  IconWrapper,
} from "./styles";

import { ReactComponent as Html } from "../../Assets/Icons/dev/html.svg";
import { ReactComponent as Css } from "../../Assets/Icons/dev/css.svg";
import { ReactComponent as Javascript } from "../../Assets/Icons/dev/javascript.svg";
import { ReactComponent as ReactIcon } from "../../Assets/Icons/dev/react.svg";
import { ReactComponent as Redux } from "../../Assets/Icons/dev/redux.svg";
import { ReactComponent as ReduxSaga } from "../../Assets/Icons/dev/reduxSaga.svg";
import { ReactComponent as StyledComponent } from "../../Assets/Icons/dev/styledComponents.svg";
import { ReactComponent as Flow } from "../../Assets/Icons/dev/flow.svg";
import { ReactComponent as Git } from "../../Assets/Icons/dev/git.svg";
import { ReactComponent as VsCode } from "../../Assets/Icons/dev/vscode.svg";
import Icons from "../../Icons/index";

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
        <SkillNameWrapper>
          <IconWrapper>
            <Icons type="html" />
            <div>HTML</div>
          </IconWrapper>
          <IconWrapper>
            <Css />
            <div>CSS</div>
          </IconWrapper>
          <IconWrapper>
            <Javascript />
            <div>Javascript</div>
          </IconWrapper>
          <IconWrapper>
            <ReactIcon />
            <div>React Js</div>
          </IconWrapper>
          <IconWrapper>
            <Redux />
            <div>Redux</div>
          </IconWrapper>
          <IconWrapper>
            <ReduxSaga />
            <div>Redux-Saga</div>
          </IconWrapper>
          <IconWrapper>
            <StyledComponent />
            <div>Styled Components</div>
          </IconWrapper>
          <IconWrapper>
            <Flow />
            <div>Flow</div>
          </IconWrapper>
          <IconWrapper>
            <Git />
            <div>Git</div>
          </IconWrapper>
          <IconWrapper>
            <VsCode />
            <div>Vs Code</div>
          </IconWrapper>
        </SkillNameWrapper>
      </SkillWrapper>
    </MainContainer>
  );
};

export default Skills;
