import styled, { css } from "styled-components";
import { initialTheme } from "../../theme/theme";

export const HeaderUI = styled.h1`
  color: ${initialTheme.light};
  text-align: ${(props) => (props.align ? props.align : "center")};
  padding: 48px 0;
  margin-top: 0;
  margin-bottom: 0;
  ${(props) =>
    props.py &&
    css`
      padding-top: ${props.py}px;
      padding-bottom: ${props.py}px;
    `}
  ${(props) =>
    props.pyMd &&
    css`
      @media (min-width: 768px) {
        padding-top: ${props.pyMd}px;
        padding-bottom: ${props.pyMd}px;
      }
    `}
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}
`;
