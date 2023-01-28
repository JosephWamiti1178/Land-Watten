
import './App.css';
import Navbar from './components/Navbar';
import ImageSlider from './components/Hero';
import { SliderData } from './components/SliderData';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter>
    <Navbar />
    <ImageSlider slides={SliderData} />
    </BrowserRouter>
    
  );
}

export default App;
