import styled from "styled-components";

import * as color from "../../Constants/colors";
import * as fonts from "../../Constants/fonts";
import * as size from "../../Constants/size";
import hand from "../../Constants/cursor";

const StyledLink = styled.a`
  background: ${color.green};
  width: 80px;
  color: ${color.dark};
  text-decoration: none;
  font-family: ${fonts.secondary};
  padding: 9px 12px;
  display: flex;
  justify-content: center;
  cursor: ${hand};
`;

export { StyledLink };
