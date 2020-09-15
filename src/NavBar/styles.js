import styled from "styled-components";
import { NavLink } from "react-router-dom";

import * as colors from "../Constants/colors";

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
  > a > svg {
    width: 28px;
    fill: ${colors.green};
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='27' height='32' viewport='0 0 100 100' style='fill:black;font-size:16px;'><text y='50%'>💡</text></svg>")
        16 0,
      auto;
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
