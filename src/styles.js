import styled from "styled-components";

import * as color from "./Constants/colors";
import cursor from "./cursor.png";
import { device } from "./Constants/screen";

const { tablet } = device;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${color.dark};
  color: white;
  display: flex;
  cursor: url(${cursor}), auto;
  user-select: none;
  overflow: hidden;

  @media ${tablet} {
    flex-direction: column;
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export { Container, Content };
