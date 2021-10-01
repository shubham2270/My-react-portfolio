import React from "react";

import { SkillNameWrapper, IconWrapper } from "./styles";
import Icons from "../../../../Icons/index";

const LanguageAndTools = () => {
  const techList = [
    {
      name: "HTML",
      icon: "html",
      fallbackColor: "rgb(138, 48, 25)",
      background: `linear-gradient(
    34deg,
    rgba(138, 48, 25, 1) 0%,
    rgba(185, 56, 31, 1) 35%,
    rgba(228, 77, 38, 1) 100%
  )`,
    },
    {
      name: "CSS",
      icon: "css",
      fallbackColor: "rgb(18,97,156);",
      background: `linear-gradient(34deg, rgba(18,97,156,1) 0%, rgba(16,84,134,1) 35%, rgba(21,114,182,1) 100%)`,
    },
    {
      name: "Javascript",
      icon: "javascript",
      fallbackColor: "rgb(212,193,69)",
      background: `linear-gradient(34deg, rgba(212,193,69,1) 0%, rgba(179,163,60,1) 35%, rgba(240,219,79,1) 100%)`,
    },
    {
      name: "React JS",
      icon: "reactIcon",
      fallbackColor: "rgb(87,195,223)",
      background: `linear-gradient(34deg, rgba(87,195,223,1) 0%, rgba(82,176,201,1) 35%, rgba(97,218,250,1) 100%)`,
    },
    {
      name: "Next JS",
      icon: "nextjs",
      fallbackColor: "rgb(214,214,214)",
      background: `linear-gradient(34deg, rgba(214,214,214,1) 0%, rgba(158,158,158,1) 35%, rgba(244,244,244,1) 100%)`,
    },
    {
      name: "Redux",
      icon: "redux",
      fallbackColor: "rgb(103,65,163)",
      background: `linear-gradient(34deg, rgba(103,65,163,1) 0%, rgba(85,54,135,1) 35%, rgba(118,74,188,1) 100%)`,
    },
    {
      name: "Redux-Saga",
      icon: "reduxSaga",
      fallbackColor: "rgb(124,196,98)",
      background: `linear-gradient(34deg, rgba(124,196,98,1) 0%, rgba(113,176,90,1) 35%, rgba(137,217,109,1) 100%)`,
    },
    {
      name: "Styled Components",
      icon: "styledComponent",
      fallbackColor: "rgb(224,86,133)",
      background: `linear-gradient(34deg, rgba(224,86,133,1) 0%, rgba(191,74,113,1) 35%, rgba(255,97,150,1) 100%)`,
    },
    {
      name: "Flow",
      icon: "flow",
      fallbackColor: "rgb(218,136,19)",
      background:
        "linear-gradient(34deg, rgba(218,136,19,1) 0%, rgba(184,115,17,1) 35%, rgba(253,157,20,1) 100%)",
    },
    {
      name: "Git",
      icon: "git",
      fallbackColor: "rgb(219,73,39)",
      background:
        "linear-gradient(34deg, rgba(219,73,39,1) 0%, rgba(195,65,35,1) 35%, rgba(243,79,41,1) 100%)",
    },
    {
      name: "Vs Code",
      icon: "vsCode",
      fallbackColor: "rgb(30,117,176)",
      background:
        "linear-gradient(34deg, rgba(30,117,176,1) 0%, rgba(29,107,159,1) 35%, rgba(37,141,211,1) 100%)",
    },
  ];

  return (
    <SkillNameWrapper>
      {techList.map((tech) => {
        const { name, icon, fallbackColor, background } = tech;
        return (
          <IconWrapper fallbackColor={fallbackColor} background={background}>
            <Icons type={icon} />
            <div>{name}</div>
          </IconWrapper>
        );
      })}
    </SkillNameWrapper>
  );
};

export default LanguageAndTools;
