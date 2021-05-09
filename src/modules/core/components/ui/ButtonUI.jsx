import styled, { css } from "styled-components";
import { initialTheme } from "../../theme/theme";

export const ButtonUI = styled.button`
  background-color: ${initialTheme.primary};
  border: 1px solid ${initialTheme.primary};
  color: ${initialTheme.dark200};
  padding: 16px 30px;
  cursor: pointer;
  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      color: ${initialTheme.primary};
      &:hover {
        background-color: ${initialTheme.primary};
        color: ${initialTheme.dark200};
      }
    `}
`;
