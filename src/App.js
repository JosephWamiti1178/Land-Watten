
import './App.css';
import Navbar from './components/Navbar';
import ImageSlider from './components/Main/Hero';
import About from './components/Main/About';
//import Property from './components/Main/Property';
import Footer from './components/Footer'
//import Card from './components/Card'
import  ContactForm from './components/Main/Contact';
//import Testimonial from './components/Testimonial';
import { SliderData } from './components/Main/SliderData';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    < BrowserRouter>
    <Navbar />
     <ImageSlider slides={SliderData} />
     {/*<About/>
    <Property />
    <ContactForm /> */}
    {/* <Testimonial/>  */}
    <Footer /> 
    </BrowserRouter>
    
  );
}

export default App;
