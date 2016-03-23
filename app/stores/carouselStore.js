import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {carouselConstants} from '../constants/carouselConstants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

var _carousel = {
    current: 0,
    images : [],
    speed: 3000,
    interval: 0
};


export const carouselStore = objectAssign({}, EventEmitter.prototype, {

  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

  getState: function() {
    return _carousel;
  },

  nextImage: function() {
    var next = _carousel.current + 1;
    if (next >= _carousel.images.length) next = 0;
    _carousel.current = next;

  },

  prevImage: function() {
    var next = _carousel.current - 1;
    if (next < 0) next = _carousel.images.length - 1;
    _carousel.current = next;
  },

  selectImage: function(index) {
    _carousel.current = index;
  },

});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case carouselConstants.PREV_IMAGE:
      carouselStore.prevImage();
      carouselStore.emit(CHANGE_EVENT);
      break;
    case carouselConstants.NEXT_IMAGE:
      carouselStore.nextImage();
      carouselStore.emit(CHANGE_EVENT);
      break;
    case carouselConstants.SELECT_IMAGE:
      carouselStore.selectImage(action.data);
      carouselStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});
