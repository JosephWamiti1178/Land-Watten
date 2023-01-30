
import './App.css';
import Navbar from './components/Navbar';
import About from './components/Main/About';
import Property from './components/Main/Property';
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
  //const [filterLands, setFilterLands] = useState("all");

  useEffect(() => {
    fetch("http://localhost:3000/lands?q=" + search)
      .then((response) => response.json())
      .then((data) => setLands(data));
  }, [search]);

  // const category = lands.filter((rental) => {
  //   if (filterLands === "all") {
  //     return true;
  //   } else {
  //     return lands.size === filterLands;
  //   }
  // });

  // const sortedLands = [...category].sort((a, b) =>
  //   a.title > b.title ? 1 : -1
  // );

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <BrowserRouter>
    <Navbar 
     handleSearch={handleSearch}
     lands={lands}
    //  filterLands={filterLands}
    //  setFilterLands={setFilterLands}
    
    />
      <Switch>
        <Route path="/">
      <ImageSlider slides={SliderData}  /> 
      </Route> 
      <Route path="/add">
        <AddLand lands={lands} setLands={setLands} />
          </Route>
        {/* <Route path="/properties" element={<DisplayProperties />} />
        <Route exact path="/properties/:id" element={<HouseDetails />} />   */}
      <Route path="/about">
         <About />
      </Route> 
        <Route path="/property">
          <Property /> 
        </Route>
        <Route path="/contact">
          <ContactForm /> 
        </Route>
      
      </Switch>
    <Footer /> 
    </BrowserRouter>
    
  );
}

export default App;
