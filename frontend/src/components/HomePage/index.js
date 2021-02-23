import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from "../../store/home"
import * as sessionActions from "../../store/session"

import "./HomePage.css";
import { useEffect } from "react";

const HomePage = () => {
  const sessionUser = useSelector(state => state.session.user);
  const instruments = useSelector(state => state.home.instruments);
  const dispatch = useDispatch();

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
          <button className="home-explore-button">Explore nearby instruments</button>
        </div>
      </div>
      <div className="home-featured-container">
        <p>{instruments[0].name}</p>
        <p>{instruments[1].name}</p>
        <p>{instruments[2].name}</p>
      </div>
    </>
  )
}

export default HomePage;
