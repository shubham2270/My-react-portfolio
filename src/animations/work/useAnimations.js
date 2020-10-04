import { useState } from "react";
import { useSpring } from "react-spring";

import { medium } from "../../Constants/size";
import useBoolean from "../../hooks/useBoolean";

const useAnimations = () => {
  const [active, setActive] = useState(false);
  const [fading, setFading] = useState(false);
  const textZoom = useSpring({
    from: { fontSize: medium },
    to: { fontSize: active ? "21px" : medium },
    config: { duration: 100 },
  });

  const slideDown = useSpring({
    height: active ? "185px" : "0px",
    opacity: active ? 1 : 0,
  });

  const slideRight = useSpring({
    transform: active ? "translateY(81%)" : "translateY(0%)",
  });

  const pop1 = useSpring({
    transform: active
      ? "scale(1) translateY(0%)"
      : "scale(0) translateY(-100%)",
    delay: 300,
    config: {
      duration: 250,
    },
  });
  const pop2 = useSpring({
    transform: active
      ? "scale(1) translateY(0%)"
      : "scale(0) translateY(-100%)",
    delay: 400,
    config: {
      duration: 250,
    },
  });

  const fade = useSpring({
    opacity: fading ? 0 : 1,
    config: {
      duration: 300,
    },
  });

  const slideInLeft = useSpring({
    transform: fading ? "translateX(100%)" : "translateX(0%)",
    config: {
      duration: 250,
    },
  });

  return {
    textZoom,
    setActive,
    slideDown,
    slideRight,
    pop1,
    pop2,
    active,
    fade,
    setFading,
    slideInLeft,
    fading,
  };
};

export default useAnimations;
