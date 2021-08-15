import React from "react";

import { SkillNameWrapper, IconWrapper } from "./styles";
import Icons from "../../../../Icons/index";

const LanguageAndTools = () => {
  return (
    <SkillNameWrapper>
      <IconWrapper>
        <Icons type='html' />
        <div>HTML</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='css' />
        <div>CSS</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='javascript' />
        <div>Javascript</div>
      </IconWrapper>

      <IconWrapper>
        <Icons type='reactIcon' />
        <div>React Js</div>
      </IconWrapper>

      <IconWrapper>
        <Icons type='nextjs' />
        <div>Next Js</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='redux' />
        <div>Redux</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='reduxSaga' />
        <div>Redux-Saga</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='styledComponent' />
        <div>Styled Components</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='flow' />
        <div>Flow</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='git' />
        <div>Git</div>
      </IconWrapper>
      <IconWrapper>
        <Icons type='vsCode' />
        <div>Vs Code</div>
      </IconWrapper>
    </SkillNameWrapper>
  );
};

export default LanguageAndTools;
