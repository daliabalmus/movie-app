import styled from "styled-components";

export const ImgUI = styled.img`
  width: 100%;
  height: ${(props) => (props.h ? props.h + "px" : "auto")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + "px" : "auto")};
  display: block;
  margin: 0 auto;
`;
