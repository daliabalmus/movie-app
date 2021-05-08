import styled from "styled-components";
import { initialTheme } from "../../theme/theme";

export const ShowCardUI = styled.div`
  border: 1px solid ${initialTheme.dark100};
  padding: 12px;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ShowNameUI = styled.h5`
  color: ${initialTheme.light};
  margin-bottom: 0;
`;
