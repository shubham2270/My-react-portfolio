import styled from "styled-components";

import * as color from "./Constants/colors";
import cursor from "./cursor.png";
// const cursor = require("./cursor.png");

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${color.dark};
  color: white;
  display: flex;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='27' height='32' viewport='0 0 100 100' style='fill:black;font-size:16px;'><text y='50%'>⭐</text></svg>")
      16 0,
    auto;
  /* cursor: url(${cursor}), auto; */
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export { Container, Content };
