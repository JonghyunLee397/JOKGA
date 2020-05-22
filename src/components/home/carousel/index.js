import React, { useState } from 'react'
import { 
  Carousel,
  CarouselItem,
} from 'react-bootstrap'
import jokbal from '../images/jokbal.jpg'
import bossam from '../images/bossam.jpg'
import chickenfeet from '../images/chickenfeet.jpg'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import './style.scss'

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
            src={jokbal}
          />
          <CarouselCaption
            className='caption'
          >
            <h1>네티즌 맛집 신정!</h1>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img
            alt='chicken feet'
            className='picture'
            src={chickenfeet}
          />
          <CarouselCaption
            className='caption'
          >
            <h1>좃나 맛있음</h1>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img
            alt='bossam'
            className='picture'
            src={bossam}
          />
          <CarouselCaption
            className='caption'
          >
            <h1>보쌈 사삼</h1>
          </CarouselCaption>
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default ImageCarousel