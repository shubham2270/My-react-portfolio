import styled from "styled-components";

import * as color from "../../Constants/colors";
import * as fonts from "../../Constants/fonts";
import * as size from "../../Constants/size";

const Heading = styled.div`
  color: ${color.grey};
  font-size: ${size.large};
  font-family: ${fonts.primary};
  padding-bottom: 20px;
`;

const Content = styled.div`
  color: ${color.white};
  font-size: ${size.medium};
  font-display: ${fonts.secondary};
  line-height: 1.5rem;
`;

const AboutWrapper = styled.div`
  width: 40%;
`;

export { Heading, Content, AboutWrapper };
