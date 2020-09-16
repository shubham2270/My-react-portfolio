import styled from "styled-components";
import { NavLink } from "react-router-dom";

import * as colors from "../Constants/colors";
import hand from "../Assets/cursors/hand.png";

const Nav = styled.div`
  display: grid;
  place-items: center;
  width: 5vw;
  height: 100%;
  background: ${colors.grey};
`;

const NavIconsWrapper = styled.div`
  width: 60px;
  height: 45%;
  display: grid;
  place-items: center;
  > a {
    cursor: url(${hand}), auto;
  }
  > a > svg {
    width: 28px;
    fill: ${colors.green};
    cursor: url(${hand}), auto;
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
