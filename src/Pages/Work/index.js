import React from "react";

import MainContainer from "../styles";
import { Content } from "../About/styles";
import Button from "../../Components/Button";
import { projectData } from "../../Assets/Data/projectData";

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
              {projectData.map((el) => {
                return (
                  <div key={el.id}>
                    {console.log("el.image", el.image)}
                    <li key={el.id}>{el.name}</li>
                    {/* <img
                      src={require(`../../Assets/projectImages/webprojects/${el.image}`)}
                      alt={el.alt}
                    /> */}
                  </div>
                );
              })}
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
