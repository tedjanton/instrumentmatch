import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const SearchContext = React.createContext();

export function SearchProvider({ children }) {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <SearchContext.Provider value={{isSearching, setIsSearching}}>
        {children}
      </SearchContext.Provider>
    </>
  );
}

export default SearchContext;
