import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function LandDetails() {
  const { id } = useParams();
  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/lands/${id}`)
      .then((response) => response.json())
      .then((data) => setLands(data));
  }, [id]);

  return (
    <div>
      <h1 className="text-center">Land Details</h1>
      Land {id}
      <div className="col-2 mb-4 center">
        <div className="row no-gutters" style={{ width: "18rem;" }}>
          <div className="row ">
            <div className="card p-0 m-1 border border-success shadow p-3 mb-5 bg-body rounded">
              <div className="col md-3">
                <img src={lands.image} className="card-img-top" alt="..." />
              </div>

              <div className="card-body">
              <h5 className="card-text-sm">
                  Title:
                  <span className="text-success"> {lands.title}</span>
                </h5>
                <h5 className="card-text-sm">
                  Size:
                  <span className="text-success"> {lands.size}</span>
                </h5>

                <h5 className="card-text-sm">
                  Price KSH:
                  <span className="text-success"> {lands.price}</span>
                </h5>
              </div>

              <Link to="/">
                <button className="btn btn-success">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandDetails;