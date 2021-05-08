import React, { useState, useEffect } from "react";
import { HeaderUI } from "../../core/components/ui/HeaderUI";
import axios from "axios";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { ImgUI } from "../../core/components/ui/ImgUI";
import { DivUI } from "../../core/components/ui/DivUI";
import { SpanUI, TextUI } from "../../core/components/ui/TextUI";
import DetailsList from "./components/DetailsList";
import { StarsUI } from "../../core/components/ui/StarsUI";
import { initialTheme } from "../../core/theme/theme";
import Loader from "../../core/components/Loader";
import EpisodesList from "./components/EpisodesList";

const Details = (props) => {
  const showId = props.match.params.id;

  const [show, setShow] = useState({
    loading: true,
    details: null,
  });

  const getShow = async () => {
    const url = `http://api.tvmaze.com/shows/${showId}`;
    await axios.get(url).then((res) => {
      const resShow = res.data;

      setShow({ ...show, details: { ...resShow }, loading: false });
    });
  };

  useEffect(() => {
    (async () => {
      await getShow();
    })();
  }, []);

  return show.loading ? (
    <Loader />
  ) : (
    <Container>
      <DivUI py="96">
        <Row>
          <Col sm={3}>
            {show.details?.image && (
              <ImgUI src={show.details?.image?.original} alt="Show" />
            )}
          </Col>
          <Col col>
            <DivUI pl="12">
              <DivUI dFlex justifyBetween>
                <HeaderUI align="left" py="0" mb="24">
                  {show.details?.name}
                </HeaderUI>

                <DivUI w="auto" align="right">
                  <StarsUI rating={show.details?.rating?.average} />
                  <div>
                    <SpanUI color={initialTheme.light300} size="20">
                      {show.details?.rating?.average}
                    </SpanUI>
                    <SpanUI> / 10</SpanUI>
                  </div>
                </DivUI>
              </DivUI>

              <TextUI
                mb="24"
                dangerouslySetInnerHTML={{ __html: show.details?.summary }}
              />

              <DetailsList show={show.details} />
            </DivUI>
          </Col>
        </Row>

        <EpisodesList showId={showId} />
      </DivUI>
    </Container>
  );
};

export default Details;
