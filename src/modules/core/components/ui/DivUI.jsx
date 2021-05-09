import styled, { css } from "styled-components";

export const DivUI = styled.div`
  width: ${(props) => (props.w ? props.w + "px" : "100%")};
  height: ${(props) => (props.h ? props.h + "px" : "auto")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  position: relative;
  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
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
  .hover-details {
    position: relative;
    .overlay {
      position: absolute;
      top: 12px;
      left: 12px;
      bottom: 12px;
      right: 12px;
      width: auto;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 12px;
      visibility: hidden;
      .more-details {
        position: absolute;
        bottom: 12px;
      }
    }
    &:hover {
      .overlay {
        visibility: visible;
      }
    }
  }
`;
