import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {carouselConstants} from '../constants/carouselConstants';

export const carouselActions = {
  prevImage: function(id){
    AppDispatcher.handleAction({
      actionType: carouselConstants.PREV_IMAGE,
      data: id
    })
  },
  nextImage: function(id){
    AppDispatcher.handleAction({
      actionType: carouselConstants.NEXT_IMAGE,
      data: id
    })
  },
  selectImage: function(index, id){
    AppDispatcher.handleAction({
      actionType: carouselConstants.SELECT_IMAGE,
      data: [index, id]
    })
  },
  setInterval: function(interval, id){
    AppDispatcher.handleAction({
      actionType: carouselConstants.SET_INTERVAL,
      data: [interval, id]
    })
  },
  initialise: function(state, id){
    AppDispatcher.handleAction({
      actionType: carouselConstants.INITIALISE,
      data: [state, id]
    })
  }
};
