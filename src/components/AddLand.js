import React, {useState}from "react";
//import { Link } from "react-router-dom";


 function AddLand({ lands, setLands }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setLands([
      ...lands,
      { name, image, title, size, price},
    ]);
    setName("");
    setImage("");
    setTitle("")
    setSize("");
    setPrice(0);

    fetch(" http://localhost:3000/lands", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        image,
        title,
        size,
        price
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit}>
  
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" value={name}
             onSubmit={(e) => setName(e.target.value)} className="form-control" />
    <label className="form-label" for="form4Example1">Name</label>
  </div>

  
  <div className="form-outline mb-4">
    <input type="email" id="form4Example2" value={image}
            onSubmit={(e) => setImage(e.target.value)} className="form-control" />
    <label className="form-label" for="form4Example2">Image</label>
  </div>


  <div className="form-outline mb-4">
    <textarea className="form-control"  value={title}
             onSubmit={(e) => setTitle(e.target.value)} id="form4Example3" rows="4"></textarea>
    <label className="form-label" for="form4Example3">Title</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" value={size}
            onSubmit={(e) => setSize(e.target.value)} className="form-control" />
    <label className="form-label" for="form4Example1">Size</label>
  </div>
  <div className="form-outline mb-4">
    <input type="text" id="form4Example1" value={price}
             onSubmit={(e) => setPrice(e.target.value)} className="form-control" />
    <label className="form-label" for="form4Example1">Name</label>
  </div>
  
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
    <label className="form-check-label" for="form4Example4">

    </label>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
</form>

    
  );
}

export default AddLand