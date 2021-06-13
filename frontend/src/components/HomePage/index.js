import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as instrumentActions from "../../store/instrument"
import Featured from "./Featured";
import "./HomePage.css";
import { findInstruments } from "../../store/search";
import SearchContext from "../../context/Search";

const HomePage = () => {
  const instruments = useSelector(state => state.instruments.instruments);
  const { setIsSearching } = useContext(SearchContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const featured = instruments?.filter(feature => feature.id < 5);

  useEffect(() => {
    dispatch(instrumentActions.getInstruments());
  }, []);

  // Loads all instruments to the search results page
  const handleExplore = async () => {
    setIsSearching(true);
    let allInstruments = instruments.map(instr => instr.id);
    history.push("/instruments");
    await dispatch(findInstruments(allInstruments));
    setIsSearching(false);
  }

  return (
    <>
      <div className="home-container">
        <div className="home-header">
          <h1>Go Play</h1>
        </div>
        <div className="home-explore-container">
          <button
            onClick={handleExplore}
            className="home-explore-button">
              Explore nearby instruments
          </button>

        </div>
      </div>
      <div className="home-featured">
        <h2 className="home-featured-title">Featured Instruments</h2>
          <div className="home-featured-container">
          {featured && (
            featured.map(feature => (
             <Featured key={feature.id} instrument={feature} />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage;
