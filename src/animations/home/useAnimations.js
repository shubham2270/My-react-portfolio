import { useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import { useDencrypt } from "use-dencrypt-effect";

import * as color from "../../Constants/colors";
import useBoolean from "../../hooks/useBoolean";

const useAnimations = () => {
  const { value: secondAnimate, setValue: setSecondAnimate } = useBoolean(
    false
  );

  const values = ["Front End Developer"];
  const { result, dencrypt } = useDencrypt();
  const myRef = useRef(null);

  // secondary crypt text animations
  useEffect(() => {
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);

    return () => clearInterval(action);
  }, [dencrypt, values]);

  const nameAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    delay: 500,
  });

  const secondaryNameAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-40px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 1200,
  });

  const wavingHandAnimationDown = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(-20deg)" },
    config: { duration: 200 },
    delay: 300,
    reset: true,
    reverse: true,
  });

  // "Hello I'm" text animation
  const introAnimation = useSpring({
    from: {
      transform: "translateX(-50px)",
      color: "brown",
    },
    to: {
      transform: secondAnimate ? "translateX(0px)" : "translateX(15px)",
      color: color.grey,
    },
    onRest: () => setSecondAnimate(true),
  });

  return {
    nameAnimation,
    secondaryNameAnimation,
    wavingHandAnimationDown,
    introAnimation,
    cryptAnimationText: result,
    myRef,
  };
};

export default useAnimations;
