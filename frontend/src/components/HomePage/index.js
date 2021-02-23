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

  const featured = instruments?.filter(feature => feature.id < 4);

  console.log(featured);

  // let image = instruments[0]?.Images?.find(image => image.id === 1);
  // console.log(image);

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
        { featured && (
          featured.map(feature => (
            <Featured key={feature.id} instrument={feature} />
          ))
        )}
      </div>
    </>
  )
}

export default HomePage;
