import styled from "styled-components";
import { animated } from "react-spring";

import * as color from "../../../Constants/colors";
import * as size from "../../../Constants/size";
import { primary, secondary, monoCode } from "../../../Constants/fonts";
// import hand from "../../../Assets/cursors/hand.png";
import hand from "../../../Constants/cursor";
import { device } from "../../../Constants/screen";

const PreviousDesignButton = styled.div`
  border: 1px solid ${color.green};
  border-color: ${(props) => (props.active ? color.white : color.green)};
  padding: 4px 6px;
  position: absolute;
  right: 1em;
  top: 1em;
  color: ${(props) => (props.active ? color.white : color.green)};
  cursor: ${hand};
  font-family: ${primary};
  &:hover {
    color: ${color.white};
    border: 1px solid ${color.white};
  }
  @media ${device.tablet} {
    position: initial;
    top: 8.5em;
    font-size: 0.8rem;
    cursor: pointer;
    pointer-events: none;
    z-index: 5;
  }
`;

const ContentWrapper = styled(animated.div)`
  background: ${color.dark};
  width: 20em;
  padding: 10px;
  border: 1px solid ${color.green};
  position: absolute;
  right: 1em;
  top: 3.8em;
  z-index: 1;
  overflow: hidden;
  > a {
    &:nth-child(3) {
      padding-top: 12px;
    }
  }
  @media ${device.tablet} {
    top: 9em;
    overflow: visible;
    position: initial;
  }
`;

const Version = styled.a`
  font-family: ${secondary};
  color: ${color.green};
  font-weight: bold;
  padding-bottom: 3px;
  display: flex;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: white;
    cursor: ${hand};
  }
`;

const Info = styled.div`
  font-family: ${secondary};
  color: ${color.green};
  font-size: ${size.small};
  line-height: 1.4rem;
`;

const Code = styled.div`
  font-family: ${monoCode};
  padding-left: 0.5em;
  margin-top: -5px;
`;

export { PreviousDesignButton, ContentWrapper, Version, Info, Code };
