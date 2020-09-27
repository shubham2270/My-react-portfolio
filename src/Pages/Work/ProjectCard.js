import React, { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { animated } from "react-spring";
// import Loader from "react-loader-spinner";

import {
  ProjectWrapper,
  ProjectImage,
  ProjectInfo,
  IconWrapper,
  // StyledImage,
  GifBackground,
  Slider,
  DecorativeGif,
} from "./styles";
import useBoolean from "../../hooks/useBoolean";
import useAnimations from "../../animations/work/useAnimations";
import { ReactComponent as GithubLogo } from "../../Assets/Icons/social/githubProject.svg";
import { ReactComponent as BrowserLogo } from "../../Assets/Icons/social/browser.svg";

const ProjectCard = ({ image, desc, url, github, gif, setValue, value }) => {
  // const { value: isError, setValue: setError } = useBoolean(false);
  const [description, setDescription] = useState("");
  const { value: isLoading, setValue: setLoader } = useBoolean(true);
  const {
    slideRight,
    setActive,
    active,
    pop1,
    pop2,
    fade,
    setFading,
    slideInLeft,
    fading,
  } = useAnimations();

  const emojis = ["🌟", "✨", "👾", "👀", "🤖", "😁", "🔥", "⚡", "😊", "💫"];
  const randomNumber = Math.floor(Math.random() * emojis.length);

  // Put fading effect on project desciption change
  useEffect(() => {
    setFading(true);
    setTimeout(() => {
      setDescription(desc);
      setFading(false);
    }, 400);
  }, [desc, setFading]);

  useEffect(() => {
    setLoader(true);
  }, [image, setLoader]);

  // const loadImage = isError;
  return (
    <ProjectWrapper>
      {fading && <span role="img">{emojis[randomNumber]}</span>}{" "}
      <ProjectImage style={slideInLeft}>
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
            <ProjectInfo style={fade}>{description}</ProjectInfo>
            <IconWrapper>
              <animated.a
                href={github}
                style={pop1}
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <GithubLogo />
              </animated.a>
              <animated.a
                href={url}
                style={pop2}
                target="_blank"
                rel="noopener noreferrer"
                title="Live"
              >
                <BrowserLogo />
              </animated.a>
            </IconWrapper>
            {active && (
              <DecorativeGif src="https://media.giphy.com/media/sULKEgDMX8LcI/giphy.gif" />
            )}
          </Slider>
        </GifBackground>
      </ProjectImage>
    </ProjectWrapper>
  );
};

export default ProjectCard;
