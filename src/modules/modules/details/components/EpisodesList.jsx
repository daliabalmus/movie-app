import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../../core/components/Loader";

const EpisodesList = ({ showId }) => {
  // /shows/:id/episodes

  const [episodes, setEpisodes] = useState({
    loading: true,
    list: null,
  });

  console.log(episodes);

  const getEpisodes = async () => {
    const url = `http://api.tvmaze.com/shows/${showId}/episodes`;
    await axios.get(url).then((res) => {
      const resEpisodes = res.data;

      setEpisodes({
        ...episodes,
        list: { ...resEpisodes },
        loading: false,
      });
    });
  };

  useEffect(() => {
    (async () => {
      await getEpisodes();
    })();
  }, []);

  return episodes.loading ? <Loader /> : <></>;
};

export default EpisodesList;
