import React, { useState } from "react";

import useBoolean from "../../../hooks/useBoolean";
import {
  PreviousDesignButton,
  ContentWrapper,
  Version,
  Info,
  Code,
} from "./styles";

const PreviousDesign = () => {
  const { toggle, value: modal } = useBoolean(false);
  return (
    <>
      <PreviousDesignButton onClick={() => toggle()} active={modal}>
        Previous portfolio designs
      </PreviousDesignButton>
      {modal && (
        <ContentWrapper>
          <Version
            href="https://shubham2270.github.io/My-Portfolio-v2"
            target="_blank"
          >
            Portfolio <Code>v1.0 (2018)</Code>
          </Version>
          <Info>
            My first portfolio design created using HTML, CSS & JS in year 2018
          </Info>
          <Version
            href="https://shubham2270.github.io/My-Portfolio-v3"
            target="_blank"
          >
            Portfolio <Code>v2.0 (2019)</Code>
          </Version>
          <Info>
            Portfolio design created using HTML, CSS(SASS) & JS, also
            implemented theme change in light/dark mode
          </Info>
        </ContentWrapper>
      )}
    </>
  );
};

export default PreviousDesign;
