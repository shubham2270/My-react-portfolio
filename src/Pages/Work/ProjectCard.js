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
} from "./styles";
import { green } from "../../Constants/colors";
import useBoolean from "../../hooks/useBoolean";

const ProjectCard = ({ image, desc, url, github, gif, setValue, value }) => {
  const { value: isError, setValue: setError } = useBoolean(false);

  const { value: isLoading, setValue: setLoader } = useBoolean(true);

  useEffect(() => {
    setLoader(true);
  }, [image, setLoader]);

  const loadImage = isError || !value;
  return (
    <ProjectWrapper>
      <ProjectImage>
        {loadImage && (
          <StyledImage
            src={require(`../../Assets/projectImages/webprojects/${image}`)}
            alt=""
            key={image}
            loading={isLoading}
            onLoad={() => {
              setLoader(false);
            }}
          />
        )}

        {isLoading && !value && (
          <Loader
            type="Circles"
            color={green}
            height={70}
            width={70}
            timeout={3000}
          />
        )}

        <StyledImage
          src={require(`../../Assets/projectImages/webprojects/${gif}`)}
          alt=""
          onLoad={() => setValue(true)}
          loading={!value}
          onError={() => setError(true)}
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
