import React from "react";
import { useSelector } from "react-redux";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import styles from "./Movies.module.css";

function Movies(props: { data: Entry[] }) {
  const search = useSelector((state: any) => state.filters.search);

  const cards = props.data
    .filter((entry) => entry.category === "Movie")
    .map((entry) => {
      if (entry.title.toLowerCase().includes(search))
        return <EntryCard data={entry} />;
    });
  return (
    <div className={styles.container}>
      <h2>Movies</h2>
      <div className={styles["card-container"]}>{cards}</div>
    </div>
  );
}

export default Movies;
