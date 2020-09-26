import { useState } from "react";
import { useSpring } from "react-spring";

import { medium } from "../../Constants/size";

const useAnimations = () => {
  const [active, setActive] = useState(false);
  const textZoom = useSpring({
    from: { fontSize: medium },
    to: { fontSize: active ? "21px" : medium },
    config: { duration: 100 },
  });

  const slideDown = useSpring({
    height: active ? "165px" : "0px",
    opacity: active ? 1 : 0,
  });

  const slideRight = useSpring({
    transform: active
      ? "translateX(70%) skew(-20deg)"
      : "translateX(0%) skew(0deg)",
  });

  return {
    textZoom,
    setActive,
    slideDown,
    slideRight,
    active,
  };
};

export default useAnimations;
