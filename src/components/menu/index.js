import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

const Menu = () => {
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <CarouselItem>
        
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default Menu