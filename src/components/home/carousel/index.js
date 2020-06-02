import React, { useState } from 'react'
import { 
  Carousel,
  CarouselItem,
} from 'react-bootstrap'
import jokbal from '../images/jokbal.jpg'
import jokbal1 from '../images/jokbal1.jpg';
import jokbal2 from '../images/jokbal2.jpg';
import bossam1 from '../images/bossam1.jpg';

import chickenfeet from '../images/chickenfeet.jpg'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import './style.scss';
import '../../../fonts/DXNewDay.ttf';

const ImageCarousel = () => {
  const [index, setIndex] = useState(0)
  
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  };

  return (
    <div>
    <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        style={{width: '100%'}}
      >
        <CarouselItem>
          <img
            alt='jokbal'
            className='picture'
            src={jokbal1}
          />
          <CarouselCaption
            className='caption'
          >
            <h1>방금 삶아 따뜻하게</h1>
            <h2>먹는 족발보쌈</h2>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img
            alt='chicken feet'
            className='picture'
            src={jokbal2}
          />
          <CarouselCaption
            className='caption'
          >
            <h1>방금 삶아 따뜻하게</h1>
            <h2>먹는 족발보쌈</h2>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img
            alt='bossam'
            className='picture'
            src={bossam1}
          />
          <CarouselCaption
            className='caption'
          >
            <h1>방금 삶아 따뜻하게</h1>
            <h2>먹는 족발보쌈</h2>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default ImageCarousel