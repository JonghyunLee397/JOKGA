import React from 'react';
import ImageCarousel from './carousel';
import Navigator from './navigator';
import Location from './location';
import './style.scss';

const Home = () => {

  return (
    <div>
      <ImageCarousel />
      <Location />
      <Navigator />
    </div>
  )
}

export default Home