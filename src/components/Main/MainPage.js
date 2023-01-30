import React from 'react';
import About from './About';
//import Footer from '../Footer';
import Property from './Property';
import { SliderData } from './SliderData';
import ImageSlider from './Hero'
import ContactForm from './Contact';


function MainPage(){
    return(
        <>
        <ImageSlider slides={SliderData}/>
        <About />
        <Property />
        <ContactForm />    
        </>

    )
}

export default MainPage