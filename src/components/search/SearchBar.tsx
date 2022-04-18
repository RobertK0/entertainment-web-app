import React from "react";
import styles from "./SearchBar.module.css";

import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

function SearchBar() {
  return (
    <div>
      <SearchIcon />
      <input
        className={styles.input}
        type="text"
        placeholder="Search for movies or TV series"
      ></input>
    </div>
  );
}

export default SearchBar;
