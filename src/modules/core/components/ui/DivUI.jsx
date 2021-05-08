import styled, { css } from "styled-components";

export const DivUI = styled.div`
  width: ${(props) => (props.w ? props.w + "px" : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${(props) =>
    props.py &&
    css`
      padding-top: ${props.py}px;
      padding-bottom: ${props.py}px;
    `}
  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl}px;
    `}
  overflow: hidden;
  ${(props) =>
    props.justifyBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.dFlex &&
    css`
      display: flex;
    `};
  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `};
`;
