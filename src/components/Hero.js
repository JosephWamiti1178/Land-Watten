import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ lands }) => {
  const [image, setImage] = useState([])
  const [current, setCurrent] = useState(0);
  const length = lands.length;

  useEffect(()=>{
    fetch('http://localhost:8000/lands')
     .then(res => res.json())
     .then(data => setImage(land))
  }, [])


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(lands) || lands.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slidesImage.map((land, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}  
            key={index} >
            {index === current && (
              <img src={land.image} alt='' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;