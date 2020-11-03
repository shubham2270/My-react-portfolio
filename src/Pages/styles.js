import styled from "styled-components";

import { device } from "../Constants/screen";

const MainContainer = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  padding-left: 8em;

  @media ${device.tablet} {
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 50px;
  }
`;

export default MainContainer;
