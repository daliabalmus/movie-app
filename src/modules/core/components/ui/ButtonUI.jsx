import styled from "styled-components";
import { initialTheme } from "../../theme/theme";

export const ButtonUI = styled.button`
  background-color: ${initialTheme.primary};
  border: 1px solid ${initialTheme.primary};
  padding: 16px 20px;
  cursor: pointer;
`;
