import styled from "styled-components";

import * as color from "./Constants/colors";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${color.dark};
  color: white;
  display: flex;
`;

const Content = styled.div`
  /* background: red; */
  width: 100%;
  height: 100%;
`;

export { Container, Content };
