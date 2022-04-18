import React from "react";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import styles from "./Home.module.css";

function Home(props: { data: Entry[] }) {
  const cards = props.data.map((entry) => (
    <EntryCard data={entry} />
  ));
  return (
    <div>
      <h2>Recommended for you</h2>
      <div className={styles["card-container"]}>{cards}</div>
    </div>
  );
}

export default Home;
