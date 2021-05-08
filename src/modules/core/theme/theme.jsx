const colors = {
  blue: "#1487E2",
  yellow: "#f0d60c",
  red: "#EF6565",
  white: "#ffffff",
  dark: "#1d1d1d",
  darkGray100: "#5F5F5F",
  darkGray200: "#262626",
  darkGray300: "#3c3c3c",
  darkGray400: "#292827",
  darkGray500: "#3b3b3b",
  lightGray100: "#FAFAFA",
  lightGray200: "#F5F5F5",
  lightGray300: "#D3D3D3",
  lightGray400: "#BEBEBE",
  lightGray500: "#ADABAB",
  lightGray600: "#999999",
  shadow100: "#00000012",
  shadow200: "#00000029",
  lightBlueGray: "#F7F8FB",
};

export const initialTheme = {
  primary: colors.yellow,
  secondary: colors.lightGray600,
  danger: colors.red,
  white: colors.white,
  dark: colors.dark,
  dark100: colors.darkGray100,
  dark200: colors.darkGray200,
  dark300: colors.darkGray300,
  dark400: colors.darkGray400,
  dark500: colors.darkGray500,
  light: colors.lightGray100,
  light300: colors.lightGray300,
  light600: colors.lightGray600,
  bgLight: colors.lightGray200,
  gray: colors.lightGray300,
  inactive: "#DDDDDD",
  muted: colors.lightGray500,
  lightDark: colors.shadow100,
  lightBlueGray: colors.lightBlueGray,
  shadowLight: colors.shadow100,
  shadowDark: colors.shadow200,
};

export const gridTheme = {
  breakpoints: {
    // defaults below
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 8,
  },
  col: {
    padding: 8,
  },
  container: {
    padding: 8,
    maxWidth: {
      // defaults below
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};
