import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselContainer} from './containers/CarouselContainer.js';
import domready from 'domready'

domready(function () {
  Array.prototype.map.call(
  document.querySelectorAll('[data-carousel]'),
  function(elem) {
    let settings = window.JSON.parse(elem.getAttribute('data-carousel'));
    return ReactDOM.render(
      <CarouselContainer {...settings} />, elem);
  })
});
