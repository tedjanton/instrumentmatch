import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as homeActions from "../../store/home"
import * as sessionActions from "../../store/session"

import "./HomePage.css";
import { useEffect } from "react";
import Featured from "./Featured";

const HomePage = () => {
  const history = useHistory();
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
          <button
            onClick={() => history.push("/instruments")}
            className="home-explore-button">
              Explore nearby instruments
          </button>

        </div>
      </div>
      <div className="home-featured-container">
        {instruments && (
          <>
            <Featured instrument={instruments[0]} />
            <Featured instrument={instruments[1]} />
            <Featured instrument={instruments[2]} />
          </>
        )}
      </div>
    </>
  )
}

export default HomePage;
