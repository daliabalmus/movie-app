import React, { useEffect, useState } from "react";
import { HeaderUI } from "../../../core/components/ui/HeaderUI";
import { DivUI } from "../../../core/components/ui/DivUI";
import { Col, Row } from "styled-bootstrap-grid";
import { ImgUI } from "../../../core/components/ui/ImgUI";
import { SpanUI } from "../../../core/components/ui/TextUI";
import { initialTheme } from "../../../core/theme/theme";
import Modal from "./Modal";

const Season = ({ season, episodes }) => {
  const [modal, setModal] = useState({ opened: false, episodeIdx: 0 });

  const openModal = (index) => {
    setModal({ ...modal, opened: true, episodeIdx: index });
  };

  useEffect(() => {
    if (modal.opened) {
      document.body.style = "overflow-y: hidden; padding-right: 17px;";
    } else {
      document.body.style = "overflow-y: auto; padding-right: 0;";
    }
  }, [modal]);

  const displayEpisodes = () => {
    return episodes.map((episode, index) => (
      <Col sm={6} lg={4} xl={3} key={index}>
        <DivUI mb="12" className="hover-details">
          <DivUI className="overlay">
            <HeaderUI size="18" align="left" py="0" mb="6">
              {episode.name}
            </HeaderUI>
            <SpanUI size="14" color={initialTheme.light300}>
              Release Date:{" "}
            </SpanUI>
            <SpanUI fontWeight="bold" color={initialTheme.light}>
              {episode.airdate}
            </SpanUI>
            <DivUI
              mt="24"
              className="more-details"
              onClick={() => openModal(index)}
            >
              <SpanUI color={initialTheme.primary} pointer size="14">
                More details
              </SpanUI>
            </DivUI>
          </DivUI>
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

      {modal.opened && (
        <Modal
          modal={modal}
          setModal={setModal}
          episode={episodes[modal.episodeIdx]}
        />
      )}
    </>
  );
};

export default Season;
