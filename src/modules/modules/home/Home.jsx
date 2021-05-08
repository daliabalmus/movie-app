import React from "react";
import { Container } from "styled-bootstrap-grid";
import { HeaderUI } from "../../core/components/ui/HeaderUI";
import { InputUI } from "../../core/components/ui/InputUI";
import { SearchFieldUI } from "../../core/components/ui/SearchFieldUI";
import { ButtonUI } from "../../core/components/ui/ButtonUI";
import Shows from "./components/Shows";

const Home = (props) => (
  <Container>
    <HeaderUI>Search movie</HeaderUI>

    <SearchFieldUI>
      <InputUI type="text" placeholder="Search movie"></InputUI>
      <ButtonUI>Search</ButtonUI>
    </SearchFieldUI>

    <Shows history={props.history} />
  </Container>
);

export default Home;
