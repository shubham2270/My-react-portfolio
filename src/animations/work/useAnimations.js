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

  return {
    textZoom,
    setActive,
  };
};

export default useAnimations;
