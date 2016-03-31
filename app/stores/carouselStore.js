import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {carouselConstants} from '../constants/carouselConstants';
import objectAssign from 'react/lib/Object.assign';
import EventEmitter from 'events';

let CHANGE_EVENT = 'change';

let store = {}

export const carouselStore = objectAssign({}, EventEmitter.prototype, {

  initialise: function(state, id){
    store[id] = state;
  },

  addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

  getState: function(id) {
    return store[id];
  },

  nextImage: function(id) {
    var next = store[id].current + 1;
    if (next >= store[id].images.length) next = 0;
    store[id].current = next;
  },

  prevImage: function(id) {
    var next = store[id].current - 1;
    if (next < 0) next = store[id].images.length - 1;
    store[id].current = next;
  },

  selectImage: function(index, id) {
    store[id].current = index;
  },

  setInterval: function(interval, id) {
    store[id].interval = interval;
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
    case carouselConstants.SET_INTERVAL:
      carouselStore.setInterval(action.data[0], action.data[1]);
      carouselStore.emit(CHANGE_EVENT);
      break;
    case carouselConstants.INITIALISE:
      carouselStore.initialise(action.data[0], action.data[1]);
      carouselStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});
