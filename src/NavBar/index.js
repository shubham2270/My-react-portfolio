import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../Assets/Icons/home.svg";
import { ReactComponent as AboutLogo } from "../Assets/Icons/about.svg";
import { ReactComponent as SkillsLogo } from "../Assets/Icons/skills.svg";
import { ReactComponent as WorkLogo } from "../Assets/Icons/work.svg";
import { ReactComponent as EmailLogo } from "../Assets/Icons/email.svg";

import { Nav, NavIconsWrapper, StyledLink } from "./styles";

const NavBar = () => {
  return (
    <Nav>
      <NavIconsWrapper>
        <StyledLink exact to="/">
          <HomeLogo />
        </StyledLink>
        <StyledLink to="/about">
          <AboutLogo />
        </StyledLink>
        <StyledLink to="/skills">
          <SkillsLogo />
        </StyledLink>
        <StyledLink to="/work">
          <WorkLogo />
        </StyledLink>
        <StyledLink to="/contact">
          <EmailLogo />
        </StyledLink>
      </NavIconsWrapper>
    </Nav>
  );
};

export default NavBar;
