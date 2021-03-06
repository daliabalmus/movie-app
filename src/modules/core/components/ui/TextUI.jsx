import styled, { css } from "styled-components";
import { initialTheme } from "../../theme/theme";

export const TextUI = styled.p`
  color: ${initialTheme.light600};
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-size: 14px;
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}
`;

export const SpanUI = styled.span`
  color: ${(props) =>
    props.color ? props.color : initialTheme.light600} !important;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  font-size: ${(props) => (props.size ? props.size + "px" : "14px")};

  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
    `}
`;
