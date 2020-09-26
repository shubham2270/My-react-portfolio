import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Button from "../../Components/Button";

import {
  ProjectWrapper,
  ProjectImage,
  ProjectInfo,
  ButtonWrapper,
  StyledImage,
  GifBackground,
  Slider,
} from "./styles";
import { green } from "../../Constants/colors";
import useBoolean from "../../hooks/useBoolean";
import useAnimations from "../../animations/work/useAnimations";

const ProjectCard = ({ image, desc, url, github, gif, setValue, value }) => {
  // const { value: isError, setValue: setError } = useBoolean(false);
  const { value: isLoading, setValue: setLoader } = useBoolean(true);
  const { slideRight, setActive, active } = useAnimations();

  useEffect(() => {
    setLoader(true);
  }, [image, setLoader]);

  // const loadImage = isError;
  return (
    <ProjectWrapper>
      <ProjectImage>
        {/* <StyledImage
          src={require(`../../Assets/projectImages/webprojects/${image}`)}
          alt=""
          key={image}
          loading={isLoading}
          onLoad={() => {
            setLoader(false);
          }}
        /> */}

        {/* {isLoading && (
          <Loader
            type="Circles"
            color={green}
            height={70}
            width={70}
            timeout={3000}
          />
        )} */}

        <GifBackground
          gif={require(`../../Assets/projectImages/webprojects/${gif}`)}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <Slider style={slideRight}>
            {!active && <ProjectInfo>{desc}</ProjectInfo>}
          </Slider>
        </GifBackground>
      </ProjectImage>

      <ButtonWrapper>
        <Button link={url} name="Demo" />
        <Button link={github} name="Github" />
      </ButtonWrapper>
    </ProjectWrapper>
  );
};

export default ProjectCard;
