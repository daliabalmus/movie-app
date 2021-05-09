import React from "react";
import { HeaderUI } from "../../../core/components/ui/HeaderUI";
import { DivUI } from "../../../core/components/ui/DivUI";
import { Col, Row } from "styled-bootstrap-grid";
import { ImgUI } from "../../../core/components/ui/ImgUI";

const Season = ({ season, episodes }) => {
  const displayEpisodes = () => {
    return episodes.map((episode, index) => (
      <Col col={2}>
        <DivUI key={index} mb="12">
          <ImgUI src={episode.image.medium}></ImgUI>
        </DivUI>
      </Col>
    ));
  };

  return (
    <>
      <HeaderUI size="25" align="left">
        Season {season}
      </HeaderUI>
      <Row>{displayEpisodes()}</Row>
    </>
  );
};

export default Season;
