import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/search/SearchBar";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default App;
