import React, {useState, useEffect} from "react";

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
        <section>
            {lands.map((land, id)=>{
                return(
                    <div>
                        <div className="card" key={land.id}>
                            <div className="image">
                                <img src={land.image} alt="" />
                            </div>
                           <div>
                            <h4>{land.price}</h4>
                            <p>{land.size}</p>
                           </div>
                           <div>
                            <h2>{land.name}</h2>
                           </div>
                           <button type="submit">
                                View More
                           </button>

                        </div>
                    </div>
                )

            })}

        </section>
       
    )
}

export default Property


