import React from "react";
import { HeaderUI } from "./ui/HeaderUI";
import { Container } from "styled-bootstrap-grid";

const Loader = () => {
  return (
    <Container>
      <HeaderUI>Loading....</HeaderUI>
    </Container>
  );
};

export default Loader;
