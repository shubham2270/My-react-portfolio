import styled from "styled-components";

import { Heading as aboutHeading } from "../About/styles";

const Heading = styled(aboutHeading)`
  line-height: 4.5rem;
`;

const SkillWrapper = styled.div`
  display: flex;
`;

const SkillContent = styled.div`
  width: 40%;
`;

export { Heading, SkillWrapper, SkillContent };
