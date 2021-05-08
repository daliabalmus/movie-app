import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "styled-bootstrap-grid";
import ShowCard from "../../../core/components/ShowCard";

const Shows = (props) => {
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

  return (
    <div style={{ paddingBottom: "96px" }}>
      <Row>
        {shows.allShows?.map((show, index) => {
          return (
            <Col col={3} key={index}>
              <ShowCard show={show} history={props.history} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Shows;
