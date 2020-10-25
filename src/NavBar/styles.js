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
  height: 100%;
  background: ${colors.grey};

  @media ${tablet} {
    height: 50px;
    width: 100%;
  }
`;

const NavIconsWrapper = styled.div`
  width: 60px;
  height: 45%;
  display: grid;
  place-items: center;
  > a {
    cursor: ${hand};
  }
  > a > svg {
    width: 28px;
    fill: ${colors.green};
    cursor: ${hand};
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
