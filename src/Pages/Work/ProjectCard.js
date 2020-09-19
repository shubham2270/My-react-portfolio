import React from "react";
import Button from "../../Components/Button";

import {
  ProjectWrapper,
  ProjectImage,
  ProjectInfo,
  ButtonWrapper,
} from "./styles";

const ProjectCard = ({ image, desc, url, github }) => {
  return (
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
  );
};

export default ProjectCard;
