import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../../core/components/Loader";
import Season from "./Season";

const EpisodesList = ({ showId }) => {
  const [episodes, setEpisodes] = useState({
    loading: true,
    list: null,
    maxSeason: 0,
  });

  const getEpisodes = async () => {
    const url = `http://api.tvmaze.com/shows/${showId}/episodes`;
    await axios.get(url).then((res) => {
      const resEpisodes = res.data;

      const maxSeason = Math.max.apply(
        Math,
        resEpisodes.map(function (o) {
          return o.season;
        })
      );

      setEpisodes({
        ...episodes,
        list: [...resEpisodes],
        loading: false,
        maxSeason,
      });
    });
  };

  useEffect(() => {
    (async () => {
      await getEpisodes();
    })();
  }, []);

  const displaySeason = () => {
    if (!episodes.list) return;

    const rows = [];

    for (let i = 0; i < episodes.maxSeason; i++) {
      const episodesThisSeason = episodes.list.filter(
        (ep) => ep.season === i + 1
      );

      rows.push(<Season season={i + 1} episodes={episodesThisSeason} />);
    }

    return rows;
  };

  return episodes.loading ? <Loader /> : <>{displaySeason()}</>;
};

export default EpisodesList;
