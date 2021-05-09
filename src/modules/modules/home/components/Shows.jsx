import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "styled-bootstrap-grid";
import ShowCard from "../../../core/components/ShowCard";

const Shows = ({ history, filteredShows }) => {
  const [shows, setShows] = useState({
    allShows: [],
    filteredShows: [],
    searchPageNumber: 0,
  });

  const getShows = async (pageNumber) => {
    const url = `http://api.tvmaze.com/shows?page=${pageNumber}`;
    await axios.get(url).then((res) => {
      const movies = res.data;

      setShows({ ...shows, allShows: [...movies] });
    });
  };

  useEffect(() => {
    (async () => {
      await getShows(shows.searchPageNumber);
    })();
  }, []);

  const displayShow = (show, index) => {
    return (
      <Col col={3} key={index}>
        <ShowCard show={show} history={history} />
      </Col>
    );
  };

  return (
    <div style={{ paddingBottom: "96px" }}>
      <Row>
        {filteredShows.length > 0
          ? filteredShows.map((show, index) => {
              return displayShow(show.show, index);
            })
          : shows.allShows?.map((show, index) => {
              return displayShow(show, index);
            })}
      </Row>
    </div>
  );
};

export default Shows;
