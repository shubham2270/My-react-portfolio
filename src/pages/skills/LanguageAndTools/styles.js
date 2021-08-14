import styled from "styled-components";

import { monoCode } from "../../../Constants/fonts";
import { device } from "../../../Constants/screen";

export const SkillNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
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
  > svg {
    width: 30px;
    height: 30px;
    padding-right: 0.5em;
  }
`;
