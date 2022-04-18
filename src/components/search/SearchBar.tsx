import React, { useRef } from "react";
import styles from "./SearchBar.module.css";

import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store";

function SearchBar() {
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const searchHandler = function () {
    dispatch(filterActions.applySearch(searchRef.current?.value));
  };

  return (
    <div className={styles.container}>
      <SearchIcon />
      <input
        ref={searchRef}
        onChange={searchHandler}
        className={styles.input}
        type="text"
        placeholder="Search for movies or TV series"
      ></input>
    </div>
  );
}

export default SearchBar;
