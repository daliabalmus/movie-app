import styled from "styled-components";
import { initialTheme } from "../../theme/theme";

export const NavbarUI = styled.div`
  padding: 30px 0;
  background-color: ${initialTheme.dark};
  display: flex;
  box-shadow: 0px 1px 3px ${initialTheme.shadowLight};
  a {
    color: ${initialTheme.light300};
    padding: 16px;
    text-decoration: none;
    &:hover {
      color: ${initialTheme.primary};
    }
  }
`;
