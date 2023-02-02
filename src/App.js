import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

import About from './components/About';
import Property from './components/Property';
import ContactForm from './components/ContactForm';

import {  Routes, Route } from 'react-router-dom';
//import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SliderData } from './components/SliderData';
import ImageSlider from './components/ImageSlider';

//import MainPage from './components/MainPage';
//import AddLand from './components/AddLand';
import LandDetails from './components/LandDetails';
import AddLand from './components/AddLand';


function App() {
  // const [lands, setLands] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000/lands?q=" + search)
  //     .then((response) => response.json())
  //     .then((data) => setLands(data));
  // }, [search]);


  // function handleSearch(e) {
  //   setSearch(e.target.value);
  // }
  return (
    <div className="app">
      <div>
    <Navbar  />
    </div>
      <Routes>
        <Route path="/" element={<ImageSlider slides={SliderData}/>}/>
        <Route path="/add" element={<AddLand />}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/property/:id" element={<LandDetails/>}/>
        <Route path="/contact" element={  <ContactForm /> }/>
      </Routes>
    <Footer />
    </div>

  );
}

export default App;
