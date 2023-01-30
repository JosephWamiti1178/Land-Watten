
import './App.css';
import Navbar from './components/Navbar';
import About from './components/Main/About';
import Property from './components/Main/Property';
import Footer from './components/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SliderData } from './components/Main/SliderData';
import ImageSlider from './components/Main/Hero';
import ContactForm from './components/Main/Contact';
//import MainPage from './components/Main/MainPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/">
      <ImageSlider slides={SliderData} /> 
      </Route>   
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
