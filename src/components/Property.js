import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"

function Property(){
    const [lands, setLands] = useState([])

    useEffect(()=> {
        fetch("http://localhost:8000/lands")
        .then((response)=> response.json())
        .then((land) => setLands(land))
        .catch((error) => {
          console.log(error.message)
        });
      }, []);
    return(
        
            <div className="container-fluid property">
               <div className="property-wrapper">
                   <div className="heading">
                         <h2 className="title">Selling Lands</h2>
                        <p>Plots on Sale 50 x 100</p>
                </div>
            <div id="property">
              
            {lands.map((land, id)=>{
                return(
                          
                                    <div className="property-item" key={land.id}>
                                        
                                        <div className="property-image">
                                            <img src={land.image} alt="" />
                                        </div>
                                        <div className="property-name">
                                            <h2>{land.name}</h2>
                                        </div>
                                        <div>
                                            <p>{land.title}</p>
                                            <h4>{land.price}</h4>
                                            <p>{land.size}</p>
                                            
                                        </div>
                                       <Link to={`/properties/${land.id}`}>
                                        <button type="button" class="btn btn-success">More Details</button>

                                        </Link>
                            
                                    </div>
                                    
                     
                                    
                
                )

            })}
             </div>
            </div>
           </div>
       
    )
}

export default Property


