import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import About from './About'
import Property from './Property';
import ContactForm from './ContactForm';



const ImageSlider = ({slides, sortedLands}) => {
  //const [lands, setLands] = useState([])
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // useEffect(()=>{
  //   fetch(`http://localhost:8000/lands`)
  //    .then(res => res.json())
  //    .then(data => setLands(data))
  // }, [])


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
    <div className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}  
            key={index} >
            {index === current && (
              <img src={slide.image} alt='' className='image' />
            )}
          </div>
        );
      })}
    </div>
    <About />
    <Property sortedLands={sortedLands} />
    <ContactForm />
    </>
  );
};

export default ImageSlider;