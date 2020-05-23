import React from 'react';
import ImageCarousel from './carousel';
import Navigator from './navigator';
import './style.scss';

const Home = () => {

  return (
    <div>
      <ImageCarousel />
      <Navigator />
    </div>
  )
}

export default Home