import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GridThemeProvider } from "styled-bootstrap-grid";
import { ThemeProvider } from "styled-components";
import { gridTheme } from "./modules/core/theme/theme";
import { initialTheme } from "./modules/core/theme/theme";

import Routes from "./modules/core/routes/Routes";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={initialTheme}>
      <GridThemeProvider gridTheme={gridTheme}>
        <Routes />
      </GridThemeProvider>
    </ThemeProvider>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
