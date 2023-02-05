import React from "react";

import { StyledLink } from "./styles";
const Button = ({ link, name }) => {
  return (
    <StyledLink target='_blank' href={link}>
      {name}
    </StyledLink>
  );
};

export default Button;
