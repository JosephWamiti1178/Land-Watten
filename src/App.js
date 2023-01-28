
import './App.css';
import Navbar from './components/Navbar';
import ImageSlider from './components/Hero';
import About from './components/About';
import Property from './components/Property';
import Footer from './components/Footer'
//import Card from './components/Card'
import  ContactForm from './components/Contact';
//import Testimonial from './components/Testimonial';
import { SliderData } from './components/SliderData';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    < BrowserRouter>
    <Navbar />
    <ImageSlider slides={SliderData} />
    <About/>
    <Property />
    <ContactForm />
    {/* <Card /> */}
    {/* <Testimonial/> */}
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
