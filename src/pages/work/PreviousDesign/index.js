import React, { useState, useEffect } from "react";

import useBoolean from "../../../hooks/useBoolean";
import useAnimations from "../../../animations/work/useAnimations";
import {
  PreviousDesignButton,
  ContentWrapper,
  Version,
  Info,
  Code,
} from "./styles";
import useMediaQuery from "../../../hooks/useMediaQuery";

const PreviousDesign = () => {
  const { toggle, value: modal } = useBoolean(false);
  const { slideDown, setActive } = useAnimations();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  // Hide modal from dom only after closing animation finishes
  const closeModalAfterDelay = () => {
    if (!modal) {
      toggle();
      setActive(true);
    } else {
      setActive(false);
      setTimeout(() => {
        toggle();
      }, 350);
    }
  };

  return (
    <>
      <PreviousDesignButton
        onClick={isSmallScreen ? () => {} : closeModalAfterDelay}
        active={modal}
      >
        Previous portfolio designs
      </PreviousDesignButton>
      {!isSmallScreen && modal && (
        <ContentWrapper style={slideDown}>
          <Version
            href='https://shubham2270.github.io/My-Portfolio-v2'
            target='_blank'
          >
            Portfolio <Code>v1.0 (2018)</Code>
          </Version>
          <Info>
            My first portfolio design created using HTML, CSS & JS in year 2018
          </Info>
          <Version
            href='https://shubham2270.github.io/My-Portfolio-v3'
            target='_blank'
          >
            Portfolio <Code>v2.0 (2019)</Code>
          </Version>
          <Info>
            Portfolio design created using HTML, CSS(SASS) & JS, also
            implemented theme change in light/dark mode
          </Info>
        </ContentWrapper>
      )}

      {isSmallScreen && (
        <ContentWrapper>
          <Version
            href='https://shubham2270.github.io/My-Portfolio-v2'
            target='_blank'
          >
            Portfolio <Code>v1.0 (2018)</Code>
          </Version>
          <Info>
            My first portfolio design created using HTML, CSS & JS in year 2018
          </Info>
          <Version
            href='https://shubham2270.github.io/My-Portfolio-v3'
            target='_blank'
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
