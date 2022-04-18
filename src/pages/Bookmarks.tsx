import React from "react";
import { useSelector } from "react-redux";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import styles from "./Bookmarks.module.css";

function Bookmarks(props: { data: Entry[] }) {
  const search = useSelector((state: any) => state.filters.search);

  const movieCards = props.data
    .filter(
      (entry) => entry.isBookmarked && entry.category === "Movie"
    )
    .map((entry) => {
      return <EntryCard data={entry} />;
    });

  const tvShowCards = props.data
    .filter(
      (entry) =>
        entry.isBookmarked && entry.category === "TV Series"
    )
    .map((entry) => {
      return <EntryCard data={entry} />;
    });

  return (
    <div className={styles.container}>
      <h2>Bookmarked movies</h2>
      <div className={styles["card-container"]}>{movieCards}</div>
      <h2>Bookmarked TV shows</h2>
      <div className={styles["card-container"]}>{tvShowCards}</div>
    </div>
  );
}

export default Bookmarks;
