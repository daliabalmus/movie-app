import React from "react";
import { ShowCardUI, ShowNameUI } from "./ui/ShowsGridUI";
import { ImgUI } from "./ui/ImgUI";
import { SpanUI } from "./ui/TextUI";
import { DivUI } from "./ui/DivUI";

const ShowCard = ({ show, history }) => {
  return (
    <ShowCardUI onClick={() => history.push(`/details/${show?.id}`)}>
      <ShowNameUI>{show?.name}</ShowNameUI>
      {show?.image?.medium ? (
        <ImgUI src={show?.image?.medium} alt="Show" />
      ) : (
        <DivUI style={{ height: "100%" }} dFlex alignCenter>
          <SpanUI>No Image to show</SpanUI>
        </DivUI>
      )}
    </ShowCardUI>
  );
};

export default ShowCard;
