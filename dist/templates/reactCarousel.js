import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SimpleCarousel = () => {
  return (
    <Carousel>
      <div>
        <img src="https://via.placeholder.com/400x300" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/400x300" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/400x300" alt="Slide 3" />
      </div>
    </Carousel>
  );
};

export default SimpleCarousel;
