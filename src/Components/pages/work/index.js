import React, { useState, useRef, useEffect } from "react";
import { useTrail, useSpring } from "react-spring";

import MainContainer from "../../styles";
import { Content } from "../about/styles";
import VectorArt from "../../../iconFile/Vector/webproject.svg";
import ProjectList from "./ProjectList";
import ProjectCard from "./ProjectCard";
import PreviousDesign from "./PreviousDesign";
import useBoolean from "../../../hooks/useBoolean";
import useMediaQuery from "../../../hooks/useMediaQuery";
import { projectData } from "./projectData";

import {
  Heading,
  StyledList,
  Wrapper,
  SubWrapper,
  WebProjectVector,
} from "./styles";

const Work = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const { value, setValue } = useBoolean(false);
  const { image, desc, url, github, gif } = currentProject || "";
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const svgRef = useRef();

  useEffect(() => {
    const svg = svgRef?.current;

    console.log(svgRef);

    // svg.setAttribute('viewBox="0 0 1116 589.03666"');
  });

  // Filter selected project from data and store in local state
  const findSelectedProject = (selectedId) => {
    const selectedProject = projectData.filter((el) => {
      return el.id === selectedId;
    });
    setCurrentProject(selectedProject[0]);
  };

  const trail = useTrail(projectData.length, {
    from: { transform: "translateY(-50px)", opacity: 0 },
    to: {
      transform: "translateY(0px)",
      height: "0px",
      opacity: 1,
    },
  });

  const flip = useSpring({
    from: {
      opacity: 0,
      width: "0px",
      // transform: `perspective(0px) rotateY(${180}deg)`,
    },
    to: {
      opacity: 1,
      width: "450px",
      // transform: `perspective(600px) rotateY(${360}deg)`
    },
    // config: { duration: 1500 },
    // delay: 500,
  });

  return (
    <MainContainer>
      {!isSmallScreen && <PreviousDesign />}
      <SubWrapper>
        <Wrapper>
          <Heading>Some of my personal projects for practice & fun</Heading>
          <Content>
            <StyledList>
              {trail.map((props, index) => {
                const active = projectData[index].id === currentProject?.id;
                return (
                  <ProjectList
                    key={projectData[index].id}
                    id={projectData[index].id}
                    active={active}
                    styles={props}
                    findSelectedProject={findSelectedProject}
                    name={projectData[index].name}
                    setValue={setValue}
                  />
                );
              })}
            </StyledList>
          </Content>
          {currentProject ? (
            <ProjectCard
              image={image}
              desc={desc}
              url={url}
              github={github}
              gif={gif}
              value={value}
              setValue={setValue}
            />
          ) : (
            <WebProjectVector style={flip}>
              <VectorArt />
            </WebProjectVector>
          )}
          {isSmallScreen && <PreviousDesign />}
        </Wrapper>
      </SubWrapper>
    </MainContainer>
  );
};

export default Work;
