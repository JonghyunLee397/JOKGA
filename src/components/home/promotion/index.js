import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { PromotionItems, PromotionPictures } from './promotion-items';
import { Carousel, CarouselItem } from 'react-bootstrap';
import texture from '../../../texture/texture5.jpg';
import './style.scss';

const Promotion = () => {
  const [index, setIndex] = useState(0)

  const handleForward = () => {
    if (PromotionItems.length === index + 1) { return; }
    setIndex(index + 1)
  }

  const handleBack = () => {
    if (index === 0) { return; }
    setIndex(index - 1)
  }

  const handleNumberClick = (i) => {
    setIndex(i)
  }

  const showIndex = () => {
    return (
      <ul className='selectedIndex-container'>
        <li
          onClick={() => handleNumberClick(0)}
          className={index === 0 ? 'selectedIndex' : null}
        >01</li>
        <li
          onClick={() => handleNumberClick(1)}
          className={index === 1 ? 'selectedIndex' : null}
        >02</li>
        <li
          onClick={() => handleNumberClick(2)}
          className={index === 2 ? 'selectedIndex' : null}
        >03</li>
      </ul>
    )
  }

  return (
    <div
      className='promotion-container'
    >
      <div
        className='promotion-picture-container'
      >
        <img
          alt='texture'
          src={texture}
        />
        <Jumbotron>
          <IoIosArrowBack className='arrow-icon' onClick={handleBack} />
          <div className='promotion-text'>
            <div className='title'>{PromotionItems[index].title}</div>
            <div className='sub-title'>{PromotionItems[index].subTitle}</div>
            <div className='text'>{PromotionItems[index].text}</div>
            {
              showIndex()
            }
          </div>
          <IoIosArrowForward className='arrow-icon' onClick={handleForward} />
        </Jumbotron>
      </div>
      <div className='carousel-container'>
        <Carousel
          activeIndex={index}
          controls={false}
          indicators={false}
        >
          {
            PromotionPictures.map((element, index) => {
              return (
                <CarouselItem key={index}>
                  <img
                    alt={element.alt}
                    src={element.img}
                  />
                </CarouselItem>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Promotion