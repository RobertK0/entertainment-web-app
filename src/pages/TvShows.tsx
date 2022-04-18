import React from "react";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import styles from "./TvShows.module.css";

function TvShows(props: { data: Entry[] }) {
  const cards = props.data
    .filter((entry) => entry.category === "TV Series")
    .map((entry) => {
      return <EntryCard data={entry} />;
    });
  return (
    <div>
      <h2>Movies</h2>
      <div className={styles["card-container"]}>{cards}</div>
    </div>
  );
}

export default TvShows;
