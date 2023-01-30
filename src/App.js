
import './App.css';
import Navbar from './components/Navbar';
import About from './components/Main/About';
import Property from './components/Main/Property';
import Footer from './components/Footer'
import {  Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SliderData } from './components/Main/SliderData';
import ImageSlider from './components/Main/Hero';
import ContactForm from './components/Main/Contact';
//import MainPage from './components/Main/MainPage';
import AddLand from './components/Main/AddLand';


function App() {
  const [lands, setLands] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/lands?q=" + search)
      .then((response) => response.json())
      .then((data) => setLands(data));
  }, [search]);


  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="app">
    <Navbar 
     handleSearch={handleSearch}
     lands={lands}
   
    
    />
   
      <Routes>
      <Route  path="/"  element={<ImageSlider slides={SliderData}    />}> </Route> 
      <Route path="/add">
        <AddLand lands={lands} setLands={setLands} />
      </Route>
       
        <Route  path="/about"  element={<About />}> </Route> 
        <Route path="/property" element={<Property />}></Route>
        <Route path="/contact" element={  <ContactForm /> }>  
        </Route>
       
      </Routes>
    <Footer /> 
    </div>
    
  );
}

export default App;
