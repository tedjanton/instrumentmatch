import { Link } from "react-router-dom";

const InstrumentGrid = ({ instruments }) => {

  return (
    <div>
      {instruments && (
        instruments.map(instr => (
          <div className="instrument-container">
            <div className="instrument-item-image">
              <Link to={`/instruments/${instr.id}`}>
                  <img className="instrument-item" src={`${instr.Images[0].imgSrc}`} />
              </Link>
            </div>
            <h3 className="feature-item-title">{`${instr.manufacturer} ${instr?.name}`}</h3>
            <p className="feature-item-subtitle">In the {instr.city} area...</p>
          </div>
        ))
      )}
    </div>
  )
}

export default InstrumentGrid;
