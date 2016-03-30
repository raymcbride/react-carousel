import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {carouselConstants} from '../constants/carouselConstants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

let CHANGE_EVENT = 'change';

//var _carousel = {
//    current: 0,
//    images : [],
//    speed: 3000,
//    interval: 0
//};

let _store = {
}

export const carouselStore = objectAssign({}, EventEmitter.prototype, {

  bootstrap: function(carousel, carouselData){
    _store[carousel] = carouselData;
  },

  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

  getState: function(carousel) {
    return _store[carousel];
  },

  nextImage: function(carousel) {
    var next = _store[carousel].current + 1;
    if (next >= _store[carousel].images.length) next = 0;
    _store[carousel].current = next;

  },

  prevImage: function(carousel) {
    var next = _store[carousel].current - 1;
    if (next < 0) next = _store[carousel].images.length - 1;
    _store[carousel].current = next;
  },

  selectImage: function(index, carousel) {
    _store[carousel].current = index;
  },

});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case carouselConstants.PREV_IMAGE:
      carouselStore.prevImage(action.data);
      carouselStore.emit(CHANGE_EVENT);
      break;
    case carouselConstants.NEXT_IMAGE:
      carouselStore.nextImage(action.data);
      carouselStore.emit(CHANGE_EVENT);
      break;
    case carouselConstants.SELECT_IMAGE:
      carouselStore.selectImage(action.data[0], action.data[1]);
      carouselStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});
