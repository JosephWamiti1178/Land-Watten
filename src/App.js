
import './App.css';
import Header from './components/Header';
import ImageSlider from './components/Hero';
import { SliderData } from './components/SliderData';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter>
    <Header />
    <ImageSlider slides={SliderData} />
    </BrowserRouter>
    
  );
}

export default App;
