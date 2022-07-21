import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useSpring } from "react-spring";

import HomeLogo from "../iconFile/home.svg";
import AboutLogo from "../iconFile/about.svg";
import SkillsLogo from "../iconFile/skills.svg";
import WorkLogo from "../iconFile/work.svg";
import EmailLogo from "../iconFile/social/email.svg";
import * as colors from "../Constants/colors";
import useMediaQuery from "../hooks/useMediaQuery";

import { Nav, NavIconsWrapper, StyledLink, Text } from "./styles";

const NavBar = () => {
  const router = useRouter();
  const { pathname } = router;
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [highlightNav, setHighlightNav] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentNav, setCurrentNav] = useState("");

  const navItems = [
    {
      name: "home",
      path: "/",
      icon: HomeLogo,
      active: pathname === "/",
    },
    {
      name: "about",
      path: "/about",
      icon: AboutLogo,
      active: pathname === "/about",
    },
    {
      name: "skills",
      path: "/skills",
      icon: SkillsLogo,
      active: pathname === "/skills",
    },
    {
      name: "work",
      path: "/work",
      icon: WorkLogo,
      active: pathname === "/work",
    },
    {
      name: "contact",
      path: "/contact",
      icon: EmailLogo,
      active: pathname === "/contact",
    },
  ];

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
    left: currentNav === "contact" ? "12px" : "23px",
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
  }, [setHighlightNav]);

  const onMouseEnterHandler = (navName) => {
    setShowText(true);
    setCurrentNav(navName);
  };

  return (
    <Nav style={glow}>
      <NavIconsWrapper>
        {navItems.map((item) => {
          const { path, name, icon, active } = item;
          return (
            <StyledLink key={name} href={path} passHref>
              {/* <a>
                <HomeLogo />
              </a> */}
              <a
                onMouseEnter={() => onMouseEnterHandler(name)}
                onMouseLeave={() => setShowText(false)}
              >
                {name === "home" && (
                  <HomeLogo style={{ fill: active && "white" }} />
                )}
                {name === "about" && (
                  <AboutLogo style={{ fill: active && "white" }} />
                )}
                {name === "skills" && (
                  <SkillsLogo style={{ fill: active && "white" }} />
                )}
                {name === "work" && (
                  <WorkLogo style={{ fill: active && "white" }} />
                )}
                {name === "contact" && (
                  <EmailLogo style={{ fill: active && "white" }} />
                )}
              </a>
            </StyledLink>
          );

          {
            !isSmallScreen && (
              <Text style={currentNav === name ? slide : {}}>{name}</Text>
            );
          }
        })}
      </NavIconsWrapper>
    </Nav>
  );
};

export default NavBar;
