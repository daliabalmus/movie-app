import React, { useState } from "react";
import { Container } from "styled-bootstrap-grid";
import { HeaderUI } from "../../core/components/ui/HeaderUI";
import { InputUI } from "../../core/components/ui/InputUI";
import { SearchFieldUI } from "../../core/components/ui/SearchFieldUI";
import { ButtonUI } from "../../core/components/ui/ButtonUI";
import Shows from "./components/Shows";
import axios from "axios";
import Loader from "../../core/components/Loader";

const Home = (props) => {
  const [search, setSearch] = useState({
    searchValue: "",
    filteredShows: [],
    loading: false,
  });

  const filterShows = async (e) => {
    e.preventDefault();
    setSearch({ ...search, loading: true });

    const url = `http://api.tvmaze.com/search/shows?q=${search.searchValue}`;
    await axios.get(url).then((res) => {
      const movies = res.data;
      setSearch({ ...search, filteredShows: [...movies], loading: false });
    });
  };

  return (
    <Container>
      <HeaderUI>Search movie</HeaderUI>

      <SearchFieldUI onSubmit={(e) => filterShows(e)}>
        <InputUI
          type="text"
          placeholder="Search movie"
          value={search.searchValue}
          onChange={(e) =>
            setSearch({ ...search, searchValue: e.target.value })
          }
        />
        <ButtonUI type="submit">Search</ButtonUI>
      </SearchFieldUI>

      {search.loading ? (
        <Loader />
      ) : (
        <Shows history={props.history} filteredShows={search.filteredShows} />
      )}
    </Container>
  );
};

export default Home;
