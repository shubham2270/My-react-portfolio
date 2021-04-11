import React, { useEffect, useState } from "react";
import { useSpring } from "react-spring";

import { ReactComponent as HomeLogo } from "../Assets/Icons/home.svg";
import { ReactComponent as AboutLogo } from "../Assets/Icons/about.svg";
import { ReactComponent as SkillsLogo } from "../Assets/Icons/skills.svg";
import { ReactComponent as WorkLogo } from "../Assets/Icons/work.svg";
import { ReactComponent as EmailLogo } from "../Assets/Icons/social/email.svg";
import * as colors from "../Constants/colors";

import { Nav, NavIconsWrapper, StyledLink } from "./styles";

const NavBar = () => {
  const [highlightNav, setHighlightNav] = useState(false);
  const glow = useSpring({
    boxShadow: highlightNav
      ? `0px 0px 20px ${colors.green}`
      : "0px 0px 0px transparent",
  });

  const scrollNavHighlightHandler = () => {
    setHighlightNav(true);
  };

  // Change the styling for nav bar if user try's to scroll the page
  useEffect(() => {
    window.addEventListener("wheel", scrollNavHighlightHandler);
    return () => {
      window.removeEventListener("wheel", scrollNavHighlightHandler);
    };
  }, [scrollNavHighlightHandler]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightNav(false);
    }, 2500);

    return () => {
      clearInterval(() => interval);
    };
  });

  return (
    <Nav style={glow}>
      <NavIconsWrapper>
        <StyledLink exact to='/'>
          <HomeLogo />
        </StyledLink>
        <StyledLink to='/about'>
          <AboutLogo />
        </StyledLink>
        <StyledLink to='/skills'>
          <SkillsLogo />
        </StyledLink>
        <StyledLink to='/work'>
          <WorkLogo />
        </StyledLink>
        <StyledLink to='/contact'>
          <EmailLogo />
        </StyledLink>
      </NavIconsWrapper>
    </Nav>
  );
};

export default NavBar;
