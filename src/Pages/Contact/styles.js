import styled from "styled-components";

import { Heading as aboutHeading } from "../About/styles";
import hand from "../../Assets/cursors/hand.png";

import * as colors from "../../Constants/colors";

const Heading = styled(aboutHeading)`
  line-height: 4.5rem;
`;

const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-around;
  > a {
    cursor: url(${hand}), auto;
  }
  > a > svg > g > g {
    stroke: ${colors.green};
  }
  > a > svg {
    fill: ${colors.green};
    width: 80px;
  }
`;

const VectorArtWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > svg {
    width: 600px;
    height: 300px;
  }
`;

const SocialLinks = styled.div`
  font-size: 30px;
  color: ${colors.grey};
`;

const SubWrapper = styled.div`
  display: grid;
  height: 80vh;
  width: 80vw;
`;

const LinkVectorWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  Heading,
  SocialIconWrapper,
  VectorArtWrapper,
  SubWrapper,
  LinkVectorWrapper,
  SocialLinks,
};
