import React from "react";
import { useSelector } from "react-redux";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import styles from "./Search.module.css";

function Search(props: { data: Entry[] }) {
  const search = useSelector((state: any) => state.filters.search);

  const cards = props.data.map((entry) => {
    if (entry.title.toLowerCase().includes(search))
      return <EntryCard key={entry.id} data={entry} />;
  });

  return (
    <div>
      <h2>Recommended for you</h2>
      <div className={styles["card-container"]}>{cards}</div>
    </div>
  );
}

export default Search;
