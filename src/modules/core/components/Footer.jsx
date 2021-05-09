import React from "react";
import styled from "styled-components";
import { initialTheme } from "../theme/theme";

const FooterUI = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: ${initialTheme.dark200};
  margin-top: auto;
  p {
    color: ${initialTheme.dark100};
    font-size: 14px;
  }
`;

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <FooterUI>
      <p>Made by Dalia © {year}</p>
    </FooterUI>
  );
};
export default Footer;
