import "../styles/globals.css";

import { useState } from "react";
import data from "../data.json";
import { UserProvider } from "../context/user.context";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(data);
  const [query, setQuery] = useState("");

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  function toggleBookmark(item) {
    const newState = state.map((obj) => {
      if (obj.title === item.title) {
        return { ...obj, isBookmarked: !item.isBookmarked ? true : false };
      }
      return obj;
    });

    setState(newState);
  }

  return (
    <Transition>
      <UserProvider>
        <Component
          {...pageProps}
          data={state}
          toggleBookmark={toggleBookmark}
          handleSearch={handleSearch}
          query={query}
        />
      </UserProvider>
    </Transition>
  );
}

export default MyApp;
