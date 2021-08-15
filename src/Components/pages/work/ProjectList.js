import React, { useEffect } from "react";
import { animated } from "react-spring";

import { ListWrapper } from "./styles";
import useAnimations from "../../../animations/work/useAnimations";

const ProjectList = ({
  findSelectedProject,
  id,
  active,
  name,
  styles,
  setValue,
}) => {
  const { textZoom, setActive } = useAnimations();
  // if list selected then zoom animation
  useEffect(() => {
    setActive(active);
  }, [active, setActive]);

  const select = () => {
    setValue(false);
    findSelectedProject(id);
  };

  return (
    <ListWrapper style={textZoom} onClick={select} active={active}>
      <animated.li style={{ ...styles }}>{name}</animated.li>
    </ListWrapper>
  );
};

export default ProjectList;
