import React from "react";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import styles from "./Home.module.css";

function Home(props: { data: Entry[] }) {
  const cards = props.data.map((entry) => (
    <EntryCard data={entry} />
  ));
  return <div className={styles["card-container"]}>{cards}</div>;
}

export default Home;
