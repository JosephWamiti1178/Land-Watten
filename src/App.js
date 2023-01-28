
import './App.css';
import Navbar from './components/Navbar';
import ImageSlider from './components/Hero';
import About from './components/About';
import Property from './components/Property';
import  ContactForm from './components/Contact';
import { SliderData } from './components/SliderData';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter>
    <Navbar />
    <ImageSlider slides={SliderData} />
    <About/>
    <Property />
    <ContactForm />
    </BrowserRouter>
    
  );
}

export default App;
