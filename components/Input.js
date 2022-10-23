import styles from "../styles/Input.module.css";

export default function Input({ query, handleSearch, type, placeholder }) {
  return (
    <input
      value={query}
      onChange={handleSearch}
      type="search"
      placeholder={placeholder}
    />
  );
}
