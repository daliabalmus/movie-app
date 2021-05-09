import React, { useEffect } from "react";
import {
  ModalCloseTextUI,
  ModalCloseUI,
  ModalDescriptionUI,
  ModalInnerUI,
  ModalTitleUI,
  ModalUI,
} from "../../../core/components/ui/ModalUI";
import { Col, Row } from "styled-bootstrap-grid";
import { ImgUI } from "../../../core/components/ui/ImgUI";

const Modal = ({ modal, setModal, episode }) => {
  return (
    <ModalUI
      onClick={(e) => {
        e.stopPropagation();
        setModal({ ...modal, opened: false });
      }}
    >
      <ModalInnerUI onClick={(e) => e.stopPropagation()}>
        <Row>
          <Col md={5}>
            <ImgUI src={episode?.image?.original} alt="Show" />
          </Col>
          <Col md={7}>
            <ModalCloseUI onClick={() => setModal({ ...modal, opened: false })}>
              &#10005;
            </ModalCloseUI>

            <ModalTitleUI>{episode.name}</ModalTitleUI>
            <ModalDescriptionUI
              dangerouslySetInnerHTML={{ __html: episode.summary }}
            />

            {/* For mobile only */}
            <ModalCloseTextUI
              onClick={() => setModal({ ...modal, opened: false })}
            >
              Close
            </ModalCloseTextUI>
          </Col>
        </Row>
      </ModalInnerUI>
    </ModalUI>
  );
};

export default Modal;
