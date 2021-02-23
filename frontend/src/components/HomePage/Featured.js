import { Link } from "react-router-dom";

const Featured = ({ instrument }) => {

  return (
    <div className="feature-container">
      <div className="feature-item-container">
          <div className="feature-item-image">
            <Link to={`/instruments/${instrument.id}`}>
              <img className="featured-item" src={`${instrument.Images[0].imgSrc}`} />
            </Link>
          </div>
      </div>
      <h3 className="feature-item-title">{`${instrument?.manufacturer} ${instrument?.name}`}</h3>
      <p className="feature-item-subtitle">In the {instrument?.city} area...</p>
    </div>
  )
}

export default Featured;
