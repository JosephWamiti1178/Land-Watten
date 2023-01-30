import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1 className="text-center text-success py-5">Add Land</h1>

      <form class="card-body container" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Enter name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Image url</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Enter Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Enter size</label>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Enter price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <input type="submit" class="btn btn-success" value="Submit" />
        <Link to="/">
          <button className="btn btn-success bttn">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default AddLand