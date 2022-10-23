import SearchIcon from "../public/assets/icon-search.svg";
import styles from "../styles/Search.module.css";

export default function Search({ handleSearch, query, placeholder }) {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        value={query}
        onChange={handleSearch}
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}
