import React from 'react';
import { Button } from 'react-bootstrap';
import { IoMdArrowForward } from 'react-icons/io'
import ImageCarousel from './carousel';

import location from './images/location.jpg';
import './style.scss';

const Home = () => {

  return (
    <div>
      <ImageCarousel />
      <div
        className='location-picture-container'
      >
        <img
          alt='find location'
          src={location}
        />
        <div className='location-overlay text'>매장 찾기</div>
        <Button variant='secondary' className='location-overlay button'>
          <div className='button-text'>
            가자 <IoMdArrowForward />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Home