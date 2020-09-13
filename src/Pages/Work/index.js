import React, { useState } from "react";

import MainContainer from "../styles";
import { Content } from "../About/styles";
import Button from "../../Components/Button";
import { projectData } from "../../Assets/Data/projectData";
import { ReactComponent as VectorArt } from "../../Assets/Vector/webproject.svg";

import {
  Heading,
  StyledList,
  Wrapper,
  ProjectWrapper,
  SubWrapper,
  ProjectImage,
  ProjectInfo,
  ButtonWrapper,
  WebProjectVector,
  ListWrapper,
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
                  <ListWrapper
                    key={project.id}
                    onClick={() => findSelectedProject(project.id)}
                    active={project.id === currentProject?.id}
                  >
                    <li key={project.id}>{project.name}</li>
                  </ListWrapper>
                );
              })}
            </StyledList>
          </Content>
          {currentProject ? (
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
          ) : (
            <WebProjectVector>
              <VectorArt />
            </WebProjectVector>
          )}
        </Wrapper>
      </SubWrapper>
    </MainContainer>
  );
};

export default Work;
