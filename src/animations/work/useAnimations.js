import { useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

import * as color from "../../Constants/colors";

const useAnimations = () => {
  const textZoom = useSpring({
    from: { fontSize: "0rem" },
    to: { fontSize: "1.5rem" },
    // config: { duration: 1500 },
    // delay: 500,
  });

  return {
    textZoom,
  };
};

export default useAnimations;
