import React from "react";

import MainContainer from "../styles";
import { Content } from "../About/styles";
import Button from "../../Components/Button";
import {
  Heading,
  StyledList,
  Wrapper,
  ProjectWrapper,
  SubWrapper,
  ProjectImage,
  ProjectInfo,
  ButtonWrapper,
} from "./styles";

const Work = () => {
  return (
    <MainContainer>
      <SubWrapper>
        <Wrapper>
          <Heading>Some of my personal projects for practic & fun</Heading>
          <Content>
            <StyledList>
              <li>Book Search</li>
              <li>Smart Brain</li>
              <li>RGB lights</li>
              <li>Cat pics search</li>
              <li>RealEstate website</li>
              <li>Astro World</li>
            </StyledList>
          </Content>
          <ProjectWrapper>
            <ProjectImage />
            <ProjectInfo>
              A full-stack web application for searching Books fetched using
              Google books API, It has a UI built with React, a RESTful
              Node/Express server and a PostgreSQL database. It lets users have
              their own accounts through the Sign-Up and Sign-In features.﻿
            </ProjectInfo>
            <ButtonWrapper>
              <Button link="" name="Demo" />
              <Button link="" name="Github" />
            </ButtonWrapper>
          </ProjectWrapper>
        </Wrapper>
      </SubWrapper>
    </MainContainer>
  );
};

export default Work;
