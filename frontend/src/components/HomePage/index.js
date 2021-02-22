import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomePage.css";

const HomePage = () => {
  const sessionUser = useSelector(state => state.session.user);


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
    </>
  )
}

export default HomePage;
