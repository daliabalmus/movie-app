import styled, { css } from "styled-components";
import { initialTheme } from "../../theme/theme";

const starBg = initialTheme.primary;
const starColor = initialTheme.light600;
const starSize = "25px";

export const StarsUI = styled.div`
  display: inline-block;
  font-size: ${starSize};
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;

  ${(props) =>
    props.rating &&
    css`
      &::before {
        content: "★★★★★★★★★★";
        letter-spacing: 0px;
        background: linear-gradient(
          90deg,
          ${starBg} calc(${props.rating} / 10 * 100%),
          ${starColor} calc(${props.rating} / 10 * 100%)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}
`;
