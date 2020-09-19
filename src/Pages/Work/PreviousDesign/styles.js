import styled from "styled-components";
import { animated } from "react-spring";

import * as color from "../../../Constants/colors";
import * as size from "../../../Constants/size";
import { primary, secondary, monoCode } from "../../../Constants/fonts";
import hand from "../../../Assets/cursors/hand.png";

const PreviousDesignButton = styled.div`
  border: 1px solid ${color.green};
  border-color: ${(props) => (props.active ? color.white : color.green)};
  padding: 4px 6px;
  position: absolute;
  right: 1em;
  top: 1em;
  color: ${(props) => (props.active ? color.white : color.green)};
  cursor: url(${hand}), auto;
  font-family: ${primary};
  &:hover {
    color: ${color.white};
    border: 1px solid ${color.white};
  }
`;

const ContentWrapper = styled.div`
  background: ${color.dark};
  width: 20em;
  padding: 10px;
  border: 1px solid ${color.green};
  position: absolute;
  right: 1em;
  top: 3.8em;
  z-index: 1;
  > a {
    &:nth-child(3) {
      padding-top: 12px;
    }
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
    cursor: url(${hand}), auto;
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
