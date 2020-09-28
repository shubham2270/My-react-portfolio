import styled from "styled-components";

import * as color from "./Constants/colors";
import cursor from "./cursor.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${color.dark};
  color: white;
  display: flex;
  cursor: url(${cursor}), auto;
  user-select: none;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export { Container, Content };
