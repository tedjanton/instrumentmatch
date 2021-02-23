import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from "../../store/home"
import * as sessionActions from "../../store/session"

import "./HomePage.css";
import { useEffect } from "react";
import Featured from "./Featured";

const HomePage = () => {
  const history = useHistory();
  const instruments = useSelector(state => state.home.instruments);
  const dispatch = useDispatch();

  const featured = instruments?.filter(feature => feature.id < 5);

  useEffect( () => {
    dispatch(homeActions.getInstruments());
  }, [])

  return (
    <>
      <div className="home-container">
        <div className="home-header">
          <h1>Go Play</h1>
        </div>
        <div className="home-explore-container">
          <button
            onClick={() => history.push("/instruments")}
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
