import React, { useState } from "react";

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
  const [currentProject, setCurrentProject] = useState(null);
  const { image, desc, url, github } = currentProject || "";

  // Filter selected project from data and store in local state
  const findSelectedProject = (selectedId) => {
    const selectedProject = projectData.filter((el) => {
      return el.id === selectedId;
    });
    setCurrentProject(selectedProject[0]);
  };

  return (
    <MainContainer>
      <SubWrapper>
        <Wrapper>
          <Heading>Some of my personal projects for practic & fun</Heading>
          <Content>
            <StyledList>
              {projectData.map((project) => {
                return (
                  <div
                    key={project.id}
                    onClick={() => findSelectedProject(project.id)}
                  >
                    <li key={project.id}>{project.name}</li>
                  </div>
                );
              })}
            </StyledList>
          </Content>
          {currentProject && (
            <ProjectWrapper>
              <ProjectImage>
                <img
                  src={require(`../../Assets/projectImages/webprojects/${image}`)}
                  alt=""
                />
              </ProjectImage>
              <ProjectInfo>{desc}</ProjectInfo>
              <ButtonWrapper>
                <Button link={url} name="Demo" />
                <Button link={github} name="Github" />
              </ButtonWrapper>
            </ProjectWrapper>
          )}
        </Wrapper>
      </SubWrapper>
    </MainContainer>
  );
};

export default Work;
