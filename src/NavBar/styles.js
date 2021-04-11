import styled from "styled-components";
import { NavLink } from "react-router-dom";

import * as colors from "../Constants/colors";
import hand from "../Constants/cursor";
import { device } from "../Constants/screen";

const { tablet } = device;

const Nav = styled.div`
  display: grid;
  place-items: center;
  width: 5vw;
  height: 45%;
  align-self: center;
  background: ${colors.grey};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 2px solid ${colors.green};
  border-left: none;

  @media ${tablet} {
    height: 50px;
    width: 90%;
    position: fixed;
    z-index: 2;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 0px;
    border: 2px solid ${colors.green};
    border-right: 2px solid ${colors.green};
    border-top: none;
  }
`;

const NavIconsWrapper = styled.div`
  width: 60px;
  height: 80%;
  display: grid;
  place-items: center;
  > a {
    cursor: ${hand};
  }
  > a > svg {
    width: 35px;
    fill: ${colors.green};
    cursor: ${hand};
    font-weight: bold;
  }
  @media ${tablet} {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > a > svg {
      width: 30px;
      fill: ${colors.green};
      cursor: pointer;
    }
  }
`;

const StyledLink = styled(NavLink)`
  &.active {
    > svg {
      fill: ${colors.white};
    }
  }
`;

export { Nav, NavIconsWrapper, StyledLink };
