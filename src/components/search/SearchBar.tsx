import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search for movies or TV series"
    ></input>
  );
}

export default SearchBar;
