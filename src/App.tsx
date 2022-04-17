import { Route, BrowserRouter } from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/search/SearchBar";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <SearchBar />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/tv-shows">
        <TvShows />
      </Route>
      <Route path="/bookmarks">
        <Bookmarks />
      </Route>
    </div>
  );
}

export default App;
