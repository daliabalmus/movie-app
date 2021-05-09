import styled from "styled-components";

export const LayoutUI = styled.div`
  min-height: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  .container {
    height: 100%;
    .row {
      height: 100%;
    }
  }
`;

export const LayoutInnerUI = styled.div`
  flex: 1;
`;

export const ContentUI = styled.div`
  padding: 0px;
  height: calc(100% - 60px);
  width: 100%;
  transition: 0.2s ease-in-out;
`;
