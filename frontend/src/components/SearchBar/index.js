import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import Select from "react-select";
import { findInstruments } from "../../store/search";
import "./Search.css";

const SearchBar = () => {
  const instruments = useSelector(state => state.instruments.instruments);
  const [query, setQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

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


  const onSubmit = (e) => {
    e.preventDefault();
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
    })
    dispatch(findInstruments(found));
    history.push("/instruments");
  }

  return (
    <>
      <div className="search-container">
        {/* <Select
          value={selectedOp}
          options={searchList}
          onChange={(e) => setSelectedOp(e.target.value)}
          placeholder="Start your search"
          openMenuOnClick={true}
        /> */}
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

export default SearchBar;
