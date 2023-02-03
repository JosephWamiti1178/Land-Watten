import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function LandDetails() {
  const { id } = useParams();
  const [lands, setLands] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8001/lands/${id}`)
      .then((response) => response.json())
      .then((data) => setLands(data));
  }, [id]);

  return (
    
    <div>
      <div className="container">
        <h1 className="text-center">Land Details</h1>
        <div className="property-result">
                      <div id="property">
                      <div className="property-item">
                        <div className="property-img">
                          <img src={lands.image} alt="land" />
                        </div>
                        <div className="property-name">
                                <h2>{lands.name}</h2>
                               <div className="container">
                                            <p>{lands.title}</p>
                                            <h4>{lands.price}</h4>
                                            <p>{lands.size}</p>
                               </div>              
                
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