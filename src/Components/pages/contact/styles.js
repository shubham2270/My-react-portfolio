import styled from "styled-components";

import { Heading as aboutHeading } from "../about/styles";
import * as colors from "../../../Constants/colors";
import hand from "../../../Constants/cursor";
import { device } from "../../../Constants/screen";

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
  > a > svg > g {
    stroke: ${colors.green};
  }
  > a > svg {
    fill: ${colors.green};
    width: 80px;
  }

  @media ${device.tablet} {
    width: 270px;
    > a > svg {
      width: 100px;
    }
    > a {
      width: 50px;
      &:nth-child(4) {
        > svg {
          width: 80px;
        }
      }
    }
  }
`;

const VectorArtWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > svg {
    transform: scale(0.7);
  }

  @media ${device.tablet} {
    display: block;
    justify-content: flex-start;
    > svg {
      transform: scale(0.5);
      width: 100%;
    }
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
