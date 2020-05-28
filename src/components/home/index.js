import React from 'react';
import ImageCarousel from './carousel';
import Navigator from './navigator';
import Location from './location';
import Promotion from './promotion';
import './style.scss';

const Home = () => {

  return (
    <div>
      <ImageCarousel />
      <Promotion />
      <Location />
      <Navigator />
    </div>
  )
}

export default Home