import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselContainer} from './containers/CarouselContainer.js'

var settings = {
  images: ["image1.png",
           "image2.png",
           "image3.png"],
  speed: 5000
}

ReactDOM.render(
  <CarouselContainer {...settings} />, document.getElementById('app')
);

