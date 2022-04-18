import React from "react";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import styles from "./Movies.module.css";

function Movies(props: { data: Entry[] }) {
  const cards = props.data
    .filter((entry) => entry.category === "Movie")
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

export default Movies;
