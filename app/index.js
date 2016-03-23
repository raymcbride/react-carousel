import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselContainer} from './containers/CarouselContainer.js'

var settings = {
  images: ["https://raymcbride.s3.amazonaws.com/portfolio/images/fp1.png",
           "https://raymcbride.s3.amazonaws.com/portfolio/images/fp2.png",
           "https://raymcbride.s3.amazonaws.com/portfolio/images/fp3.png"],
  speed: 1000
}

ReactDOM.render(
  <CarouselContainer {...settings} />, document.getElementById('app')
);
