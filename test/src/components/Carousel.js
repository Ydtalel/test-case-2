import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <Carousel showArrows={true} showStatus={false} showThumbs={false}>
      <div>
        <img src="https://picsum.photos/200/300" alt="Image 1"
        style={{ width: '200px', height: '300px' }}
         />
      </div>
      <div>
        <img src="https://picsum.photos/200/300" alt="Image 2"
        style={{ width: '200px', height: '300px' }}
         />
      </div>
      <div>
        <img src="https://picsum.photos/200/300" alt="Image 3"
        style={{ width: '200px', height: '300px' }}
         />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
