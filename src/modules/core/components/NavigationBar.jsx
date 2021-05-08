import React from "react";
import { NavbarUI } from "./ui/NavbarUI";
import { NavLink } from "react-router-dom";
import { Container } from "styled-bootstrap-grid";

const NavigationBar = () => {
  return (
    <NavbarUI>
      <Container>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Features</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <NavLink to="/">Blog</NavLink>
      </Container>
    </NavbarUI>
  );
};

export default NavigationBar;
