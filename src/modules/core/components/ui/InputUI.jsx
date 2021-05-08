import styled from "styled-components";
import { initialTheme } from "../../theme/theme";

export const InputUI = styled.input`
  display: block;
  width: 100%;
  padding: 16px 16px;

  font-size: 14px;
  background-color: ${initialTheme.dark300};
  color: ${initialTheme.light300};
  border: 1px solid ${initialTheme.dark300};
  border-radius: 0px;
  box-sizing: border-box;

  &:focus {
    border-color: ${initialTheme.primary};
  }
  &::placeholder {
    color: #7f7f82;
    font-size: 14px;
    letterspacing: 1.15px;
  }
  &:disabled {
    background-color: ${initialTheme.dark300};
    opacity: 0.5;
    color: ${initialTheme.light300};
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${initialTheme.dark300} inset;
    -webkit-text-fill-color: ${initialTheme.light300};
    transition: background-color 5000s ease-in-out 0s;
  }
`;
