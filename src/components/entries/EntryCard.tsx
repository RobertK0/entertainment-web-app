import React from "react";
import styles from "./EntryCard.module.css";
import { Entry } from "../../App";

import { ReactComponent as MovieIcon } from "../../assets/icon-category-movie.svg";
import { ReactComponent as TvShowIcon } from "../../assets/icon-category-tv.svg";
import { ReactComponent as BookmarkFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as BookmarkEmpty } from "../../assets/icon-bookmark-empty.svg";
import { useDispatch } from "react-redux";
import { bookmarksActions } from "../../store";

function EntryCard(props: { data: Entry }) {
  const dispatch = useDispatch();

  const toggleBookmarkHandler = function () {
    if (props.data.isBookmarked)
      dispatch(bookmarksActions.removeBookmark(props.data.id));
    if (!props.data.isBookmarked)
      dispatch(bookmarksActions.addBookmark(props.data.id));
  };

  let icon;
  if (props.data.category === "Movie") icon = <MovieIcon />;
  if (props.data.category === "TV Series") icon = <TvShowIcon />;
  return (
    <div className={styles.card}>
      <div
        onClick={toggleBookmarkHandler}
        className={styles["svg-container"]}
      >
        {props.data.isBookmarked ? (
          <BookmarkFull />
        ) : (
          <BookmarkEmpty />
        )}
      </div>
      <img src={props.data.thumbnail.regular.small} />
      <div className={styles.description}>
        {props.data.year} &#8226; {icon} {props.data.category}{" "}
        &#8226; {props.data.rating}
      </div>
      <h3>{props.data.title}</h3>
    </div>
  );
}

export default EntryCard;
