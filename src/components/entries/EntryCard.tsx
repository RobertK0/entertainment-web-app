import React from "react";
import styles from "./EntryCard.module.css";
import { Entry } from "../../App";

import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { ReactComponent as TvShowIcon } from "../../assets/icon-category-tv.svg";

function EntryCard(props: { data: Entry }) {
  let icon;
  if (props.data.category === "Movie") icon = <MovieIcon />;
  if (props.data.category === "TV Series") icon = <TvShowIcon />;
  return (
    <div className={styles.card}>
      <img src={props.data.thumbnail.regular.small} />
      <div>
        {props.data.year} &#8226; {icon} {props.data.category}{" "}
        &#8226; {props.data.rating}
      </div>
      <h3>{props.data.title}</h3>
    </div>
  );
}

export default EntryCard;
