import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {carouselConstants} from '../constants/carouselConstants';

export const carouselActions = {
  prevImage: function(carousel){
    AppDispatcher.handleAction({
      actionType: carouselConstants.PREV_IMAGE,
      data: carousel
    })
  },
  nextImage: function(carousel){
    AppDispatcher.handleAction({
      actionType: carouselConstants.NEXT_IMAGE,
      data: carousel
    })
  },
  selectImage: function(index, carousel){
    AppDispatcher.handleAction({
      actionType: carouselConstants.SELECT_IMAGE,
      data: [index, carousel]
    })
  }
};
