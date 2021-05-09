import React, { useEffect, useRef } from "react";
import { ShowCardUI, ShowNameUI } from "./ui/ShowsGridUI";
import { ImgUI } from "./ui/ImgUI";
import { SpanUI, TextUI } from "./ui/TextUI";
import { DivUI } from "./ui/DivUI";
import { initialTheme } from "../theme/theme";

const ShowCard = ({ show, history }) => {
  const showSummaryRef = useRef(null);

  useEffect(() => {
    const showDescriptionEl = document.createElement("div.show-description");
    showDescriptionEl.innerHTML = show?.summary;

    const showSummaryText = showDescriptionEl.innerText;

    const descriptionToShow = showSummaryText.substr(0, 90) + "...";

    showSummaryRef.current.innerHTML = descriptionToShow;
  }, [show]);

  return (
    <ShowCardUI onClick={() => history.push(`/details/${show?.id}`)}>
      <ShowNameUI>{show?.name}</ShowNameUI>

      {show?.image?.medium ? (
        <ImgUI maxWidth="300" src={show?.image?.medium} alt="Show" />
      ) : (
        <DivUI style={{ height: "100%" }} dFlex alignCenter>
          <SpanUI>No Image to show</SpanUI>
        </DivUI>
      )}

      <DivUI>
        <TextUI ref={showSummaryRef} />

        <TextUI>
          TV Channel:{" "}
          <SpanUI color={initialTheme.light}>{show?.network?.name}</SpanUI>
        </TextUI>
        <TextUI>
          Release Date:{" "}
          <SpanUI color={initialTheme.light}>{show?.premiered}</SpanUI>
        </TextUI>
      </DivUI>
    </ShowCardUI>
  );
};

export default ShowCard;
