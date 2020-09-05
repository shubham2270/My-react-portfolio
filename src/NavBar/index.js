import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ReactComponent as HomeLogo } from "../Assets/Icons/home.svg";
import { ReactComponent as AboutLogo } from "../Assets/Icons/about.svg";
import { ReactComponent as SkillsLogo } from "../Assets/Icons/skills.svg";
import { ReactComponent as WorkLogo } from "../Assets/Icons/work.svg";
import { ReactComponent as EmailLogo } from "../Assets/Icons/email.svg";

import { Nav, NavIconsWrapper } from "./styles";

const NavBar = () => {
  return (
    <Nav>
      <NavIconsWrapper>
        <Link to="/">
          <HomeLogo />
        </Link>
        <Link to="/about">
          <AboutLogo />
        </Link>
        <Link to="/skills">
          <SkillsLogo />
        </Link>
        <Link to="/work">
          <WorkLogo />
        </Link>
        <Link to="/contact">
          <EmailLogo />
        </Link>
      </NavIconsWrapper>
    </Nav>
  );
};

export default NavBar;
