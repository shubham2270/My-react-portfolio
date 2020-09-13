import React, { useState } from "react";

import MainContainer from "../styles";
import { Heading } from "./styles";
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
  const [link, setLink] = useState(null);

  return (
    <MainContainer>
      <SubWrapper>
        <Heading>Connect with me</Heading>
        <SocialIconWrapper>
          <a
            href="https://twitter.com/shubham2272"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLink("twitter.com/shubham2272")}
            onMouseLeave={() => setLink(null)}
          >
            <TwitterLogo />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham2270"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLink("linkedin.com/in/shubham2270")}
            onMouseLeave={() => setLink(null)}
          >
            <LinkedinLogo />
          </a>
          <a
            href="https://www.github.com/shubham2270"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLink("github.com/shubham2270")}
            onMouseLeave={() => setLink(null)}
          >
            <GihubLogo />
          </a>
          <a
            href="mailto: shubham2270@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLink("shubham2270@gmail.com")}
            onMouseLeave={() => setLink(null)}
          >
            <EmailLogo />
          </a>
        </SocialIconWrapper>
        <LinkVectorWrapper>
          <SocialLinks>{link && link} </SocialLinks>
          <VectorArtWrapper>
            <VectorArt />
          </VectorArtWrapper>
        </LinkVectorWrapper>
      </SubWrapper>
    </MainContainer>
  );
};

export default Contact;
