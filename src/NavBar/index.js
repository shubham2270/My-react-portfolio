import React, { useEffect, useState, useCallback } from "react";
import {
  useSpring
} from "react-spring";

import { ReactComponent as HomeLogo } from "../Assets/Icons/home.svg";
import { ReactComponent as AboutLogo } from "../Assets/Icons/about.svg";
import { ReactComponent as SkillsLogo } from "../Assets/Icons/skills.svg";
import { ReactComponent as WorkLogo } from "../Assets/Icons/work.svg";
import { ReactComponent as EmailLogo } from "../Assets/Icons/social/email.svg";
import * as colors from "../Constants/colors";
import useMediaQuery from "../hooks/useMediaQuery";

import { Nav, NavIconsWrapper, StyledLink, Text } from "./styles";

const NavBar = () => {
   const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [highlightNav, setHighlightNav] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentNav, setCurrentNav] = useState("")


  const navItems = [
    {
      name: "home",
      path: "/",
      icon: HomeLogo
    },
    {
      name: "about",
      path: "/about",
      icon: AboutLogo
    },
    {
      name: "skills",
      path: "/skills",
      icon: SkillsLogo
    },
    {
      name: "work",
      path: "/work",
      icon: WorkLogo
    },
    {
      name: "contact",
      path: "/contact",
      icon: EmailLogo
    }
  ]
  
  // Glow animation
  const glow = useSpring({
    boxShadow: highlightNav
      ? `0px 0px 20px ${colors.green}`
      : "0px 0px 15px black",
  });

  // Animate text & icon 0n nav bar
  const slide = useSpring({
    opacity: showText ? 1 : 0,
    top: showText ? "10px" : "-20px",
    left: currentNav === "contact" ? "12px" : "23px"
  });

  const scrollNavHighlightHandler = useCallback(() => {
    setHighlightNav(true);
  }, [setHighlightNav]);

  // Change the styling for nav bar if user try's to scroll the page
  useEffect(() => {
    window.addEventListener("wheel", scrollNavHighlightHandler);
    return () => {
      window.removeEventListener("wheel", scrollNavHighlightHandler);
    };
  }, [scrollNavHighlightHandler, highlightNav]);

  // Disable the highlighted nav after 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightNav(false);
    }, 1000);

    return () => {
      clearInterval(() => interval);
    };
  },[setHighlightNav]);


  const onMouseEnterHandler = (navName) => {
    setShowText(true)
    setCurrentNav(navName)
  }

  return (
    <Nav style={glow}>
      <NavIconsWrapper>
        {navItems.map((item) => {
          const { path, name, icon } = item;
          return (
            <StyledLink
              exact
              to={path}
              onMouseEnter={() => onMouseEnterHandler(name)}
              onMouseLeave={() => setShowText(false)}
            >
              {name === "home" && <HomeLogo />}
              {name === "about" && <AboutLogo />}
              {name === "skills" && <SkillsLogo />}
              {name === "work" && <WorkLogo />}
              {name === "contact" && <EmailLogo />}

          {!isSmallScreen &&    <Text style={currentNav === name ? slide : {}}>{name}</Text>}
            </StyledLink>
          );
        })}
     
      </NavIconsWrapper>
    </Nav>
  );
};

export default NavBar;
