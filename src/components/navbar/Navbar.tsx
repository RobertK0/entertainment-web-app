import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/tv-shows">Tv Shows</NavLink>
      <NavLink to="/bookmarks">Bookmarks</NavLink>
    </nav>
  );
}

export default Navbar;
