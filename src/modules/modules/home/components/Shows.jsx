import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "styled-bootstrap-grid";
import ShowCard from "../../../core/components/ShowCard";
import ReachBottom from "../../../core/components/hooks/ReachBottom";

const Shows = ({ history, filteredShows }) => {
  const reachBottom = ReachBottom();

  const [shows, setShows] = useState({
    allShows: [],
    filteredShows: [],
    searchPageNumber: 1,
  });

  const getShows = async (pageNumber) => {
    const url = `http://api.tvmaze.com/shows?page=${pageNumber}`;
    await axios.get(url).then((res) => {
      const movies = res.data;

      setShows({ ...shows, allShows: [...shows.allShows, ...movies] });
    });
  };

  useEffect(() => {
    if (reachBottom && filteredShows.length === 0) {
      setShows({ ...shows, searchPageNumber: shows.searchPageNumber + 1 });
    }
  }, [reachBottom]);

  useEffect(() => {
    (async () => {
      getShows(shows.searchPageNumber);
    })();
  }, [shows.searchPageNumber]);

  const displayShow = (show, index) => {
    return (
      <Col sm={6} md={4} lg={3} key={index}>
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
