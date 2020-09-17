import { useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring";
import { useDencrypt } from "use-dencrypt-effect";
import WAVES from "vanta/dist/vanta.waves.min";

import * as color from "../Constants/colors";

const useAnimations = () => {
  const [secondAnimate, setSecondAnimate] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(0);

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

  // Background animations
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000a12,
          shininess: 11.0,
          waveSpeed: 0.4,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, myRef]);

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
