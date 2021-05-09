import styled from "styled-components";

export const ImgUI = styled.img`
  width: 100%;
  height: ${(props) => (props.h ? props.h + "px" : "auto")};
  display: block;
`;
