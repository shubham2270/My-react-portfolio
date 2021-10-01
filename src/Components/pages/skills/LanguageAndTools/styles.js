import styled from "styled-components";

import { monoCode } from "../../../../Constants/fonts";
import { device } from "../../../../Constants/screen";

export const SkillNameWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  font-family: ${monoCode};
  color: white;
  font-size: 1rem;
  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  /* width: 140px; */
  height: 70px;
  background: ${(props) => props.fallbackColor};
  background: ${(props) => props.background};
  padding: 5px;
  padding-left: 0px;
  border-radius: 8px;
  overflow: hidden;

  > img {
    width: 60px;
    height: 60px;
  }

  > svg {
    width: 70px;
    height: 70px;
    padding-right: 0.5em;
  }
`;
