import styled from "styled-components";
import { initialTheme } from "../../theme/theme";

export const ShowNameUI = styled.h4`
  color: ${initialTheme.light};
  margin-bottom: 12px;
  margin-top: 12px;
  text-transform: uppercase;
  display: flex;
  align-items: flex-end;
  min-height: 50px;
`;

export const ShowCardUI = styled.div`
  margin-bottom: 56px;
  cursor: pointer;
  &:hover {
    ${ShowNameUI} {
      color: ${initialTheme.primary};
    }
  }
`;
