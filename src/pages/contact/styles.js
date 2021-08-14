import styled from "styled-components";

import { Heading as aboutHeading } from "../about/styles";
import * as colors from "../../Constants/colors";
import hand from "../../Constants/cursor";
import { device } from "../../Constants/screen";

const Heading = styled(aboutHeading)`
  line-height: 4.5rem;
   @media ${device.tablet} {
   font-size: 2rem;
   line-height: 2em;
`;

const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: space-around;
  > a {
    cursor: ${hand};
  }
  > a > svg > g > g {
    stroke: ${colors.green};
  }
  > a > svg {
    fill: ${colors.green};
    width: 80px;
  }
  @media ${device.tablet} {
    width: 300px;
    > a > svg {
      width: 50px;
    }
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
    @media ${device.tablet} {
   > svg {
     width: 300px;
     height: 150px;
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
