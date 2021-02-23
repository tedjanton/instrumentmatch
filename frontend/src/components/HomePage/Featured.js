import { Link } from "react-router-dom";

const Featured = ({ instrument }) => {
  console.log(instrument);

  return (
    <div className="feature-container">
      <div>
        {/* <h3>{instrument.name}</h3> */}
        <div>
          {/* <img src={instrument.Images[0].imgSrc} /> */}
        </div>
      </div>
    </div>
  )
}

export default Featured;
