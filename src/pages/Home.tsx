import React, { useRef, useState } from "react";
import { Entry } from "../App";
import EntryCard from "../components/entries/EntryCard";
import TrendingCard from "../components/entries/TrendingCard";
import styles from "./Home.module.css";

function Home(props: { data: Entry[] }) {
  const carouselRef = useRef(null);

  const transformLeftHandler = function () {
    //@ts-ignore
    carouselRef.current.scrollLeft -= 480;
  };
  const transformRightHandler = function () {
    //@ts-ignore
    carouselRef.current.scrollLeft += 480;
  };

  const trendingCards = props.data
    .filter((entry) => entry.isTrending === true)
    .map((entry) => {
      return <TrendingCard key={entry.id} data={entry} />;
    });

  const cards = props.data.map((entry) => (
    <EntryCard key={entry.id} data={entry} />
  ));

  return (
    <div className={styles.container}>
      <h2>Trending</h2>
      <div className={styles.wrapper}>
        <button
          onClick={transformLeftHandler}
          className={styles.left}
        >
          &lt;
        </button>
        <div ref={carouselRef} className={styles.carousel}>
          {trendingCards}
        </div>
        <button
          onClick={transformRightHandler}
          className={styles.right}
        >
          &gt;
        </button>
      </div>
      <h2>Recommended for you</h2>
      <div className={styles["card-container"]}>{cards}</div>
    </div>
  );
}

export default Home;
