import styled from "styled-components";
import { initialTheme } from "../../theme/theme";

export const ModalInnerUI = styled.div`
  max-width: 900px;
  background-color: ${initialTheme.dark200};
  box-shadow: 0px 1px 3px ${initialTheme.shadowLight};
  padding: 24px;
  margin: 24px;
`;
export const ModalTitleUI = styled.h2`
  color: ${initialTheme.light};
  margin: 12px 0;
`;
export const ModalDescriptionUI = styled.p`
  color: ${initialTheme.light};
  margin: 0;
`;
export const ModalCloseTextUI = styled.div`
  color: ${initialTheme.primary};
  margin-top: 24px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ModalUI = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
