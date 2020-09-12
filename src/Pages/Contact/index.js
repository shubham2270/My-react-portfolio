import React from "react";

import MainContainer from "../styles";
import { Heading, Content, AboutWrapper } from "./styles";
import { ReactComponent as GihubLogo } from "../../Assets/Icons/social/github.svg";
import { ReactComponent as LinkedinLogo } from "../../Assets/Icons/social/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../../Assets/Icons/social/twitter.svg";
import { ReactComponent as EmailLogo } from "../../Assets/Icons/social/email.svg";
import { ReactComponent as VectorArt } from "../../Assets/Vector/social.svg";

import {
  SocialIconWrapper,
  VectorArtWrapper,
  SubWrapper,
  LinkVectorWrapper,
  SocialLinks,
} from "./styles";

const Contact = () => {
  return (
    <MainContainer>
      <SubWrapper>
        <Heading>Connect with me</Heading>
        <SocialIconWrapper>
          <a href="#">
            <TwitterLogo />
          </a>
          <a href="#">
            <LinkedinLogo />
          </a>
          <a href="#">
            <GihubLogo />
          </a>
          <a href="#">
            <EmailLogo />
          </a>
        </SocialIconWrapper>
        <LinkVectorWrapper>
          <SocialLinks>twitter.com/shubham2270</SocialLinks>
          <VectorArtWrapper>
            <VectorArt />
          </VectorArtWrapper>
        </LinkVectorWrapper>
      </SubWrapper>
    </MainContainer>
  );
};

export default Contact;
