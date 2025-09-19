import React from 'react';
import Marquee from 'react-fast-marquee';
import SliderImg from './elements/SliderImg';

const Slider = () => {
  return (
    <>
    <Marquee>
        <SliderImg/>
        <SliderImg/>
        <SliderImg/>
        <SliderImg/>
        <SliderImg/>
        <SliderImg/>
        <SliderImg/>
        <SliderImg/>
        <SliderImg/>
    </Marquee>
    </>
  )
}

export default Slider