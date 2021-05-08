import React from "react";

import { ShowCardUI, ShowNameUI } from "./ui/ShowsGridUI";

const ShowCard = ({ show, history }) => {
  return (
    <ShowCardUI onClick={() => history.push(`/details/${show?.id}`)}>
      <ShowNameUI>{show?.name}</ShowNameUI>
      <img src={show?.image?.medium} alt="Show" />
    </ShowCardUI>
  );
};

export default ShowCard;
