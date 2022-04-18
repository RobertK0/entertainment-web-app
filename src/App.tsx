import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/search/SearchBar";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import TvShows from "./pages/TvShows";
import { State } from "./store";

export type Entry = {
  id: string;
  category: string;
  isTrending: boolean;
  isBookmarked?: boolean;
  rating: string;
  thumbnail: {
    regular: { large: string; medium: string; small: string };
    trending?: { large: string; small: string };
  };
  title: string;
  year: number;
};

function App() {
  const bookmarks = useSelector((state: State) => state.bookmarks);
  const search = useSelector(
    (state: State) => state.filters.search
  );
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const newData = [...entries];
    newData.forEach((entry) => {
      if (bookmarks.includes(entry.id)) entry.isBookmarked = true;
      if (!bookmarks.includes(entry.id)) entry.isBookmarked = false;
    });
    setEntries(newData);
  }, [bookmarks]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        "https://react-entertainment-default-rtdb.europe-west1.firebasedatabase.app/entries.json"
      );
      const data: Entry[] = await response.json();
      data.forEach((entry) => {
        if (bookmarks.includes(entry.id)) entry.isBookmarked = true;
        if (!bookmarks.includes(entry.id))
          entry.isBookmarked = false;
      });
      setEntries(data);
    };
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.app}>
      <Navbar />
      <SearchBar />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        {search !== "" ? <Redirect to="/search" /> : ""}
        <Home data={entries} />
      </Route>
      <Route path="/search">
        {search === "" ? <Redirect to="/home" /> : ""}
        <Search data={entries} />
      </Route>

      <Route path="/movies">
        <Movies data={entries} />
      </Route>
      <Route path="/tv-shows">
        <TvShows data={entries} />
      </Route>
      <Route path="/bookmarks">
        <Bookmarks data={entries} />
      </Route>
    </div>
  );
}

export default App;
