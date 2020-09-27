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
  width: 60%;
  color: ${color.white};
  font-size: ${size.medium};
  font-display: ${fonts.secondary};
  line-height: 1.5rem;
`;

const AboutWrapper = styled.div`
  width: 90%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const MyPicture = styled.img`
  width: 40%;
  filter: grayscale(0.8);
`;

export { Heading, Content, AboutWrapper, MyPicture };
