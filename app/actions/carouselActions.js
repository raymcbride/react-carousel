import {AppDispatcher} from '../dispatcher/AppDispatcher';
import {carouselConstants} from '../constants/carouselConstants';

export const carouselActions = {
  prevImage: function(){
    AppDispatcher.handleAction({
      actionType: carouselConstants.PREV_IMAGE
    })
  },
  nextImage: function(){
    AppDispatcher.handleAction({
      actionType: carouselConstants.NEXT_IMAGE
    })
  },
  selectImage: function(index){
    AppDispatcher.handleAction({
      actionType: carouselConstants.SELECT_IMAGE,
      data: index
    })
  }
};
