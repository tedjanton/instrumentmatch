import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import SearchContext from "../../context/Search";
import { findInstruments } from "../../store/search";
import "./Search.css";

const SearchBar = () => {
  const instruments = useSelector(state => state.instruments.instruments);
  const [query, setQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { setIsSearching } = useContext(SearchContext);

  const searchList = instruments?.map(instrument => {
    return {
      id: instrument.id,
      name: instrument.name,
      family: instrument.Family.family,
      city: instrument.city.toLowerCase(),
      state: instrument.state.toLowerCase(),
      zip: instrument.zip.toString()
    }
  })

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    let lowQuery = query.toLowerCase()
    let found = []

    searchList?.forEach(item => {
      if (item.name.includes(lowQuery)) {
        found.push(item.id);
      } else if (item.family.includes(lowQuery)) {
        found.push(item.id);
      } else if (item.city.includes(lowQuery)) {
        found.push(item.id);
      } else if (item.state.includes(lowQuery)) {
        found.push(item.id);
      } else if (item.zip.includes(lowQuery)) {
        found.push(item.id);
      }
    });

    history.push("/instruments");
    setQuery("");
    await dispatch(findInstruments(found));
    setIsSearching(false);
  }

  return (
    <>
      <div className="search-container">
        <form onSubmit={onSubmit}>
          <input
            className="search-input"
            type="text"
            value={query}
            required={true}
            placeholder='Try "Chicago" or "woodwind"...'
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

export default SearchBar;
