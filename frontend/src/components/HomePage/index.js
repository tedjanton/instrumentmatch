import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
  const sessionUser = useSelector(state => state.session.user);


  return (
    <>
      <div>
        <h1>Go Play</h1>
        <button className="explore-instruments">Explore instruments</button>
      </div>
    </>
  )
}
