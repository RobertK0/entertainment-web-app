import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/icon-nav-home.svg";
import { ReactComponent as TvShows } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as Movies } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as Bookmarks } from "../../assets/icon-nav-bookmark.svg";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/home">
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/movies">
              <Movies />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/tv-shows">
              <TvShows />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.active}
              to="/bookmarks"
            >
              <Bookmarks />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
