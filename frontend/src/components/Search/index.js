import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <div className="search-container">
        <form onSubmit={onSubmit}>
          <input
            className="search-input"
            type="text"
            value={query}
            placeholder="Start your search"
            onChange={(e) => setQuery(e.target.value)}
          >
          </input>
            <button id="search-button" type="submit">
              <i className="fas fa-search" />
            </button>
        </form>
      </div>
    </>
  )
}

export default Search;
