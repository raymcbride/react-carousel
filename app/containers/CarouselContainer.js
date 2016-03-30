import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from '../components/Carousel';
import {carouselStore} from '../stores/carouselStore';
import {carouselActions} from '../actions/carouselActions';

export class CarouselContainer extends React.Component{

  constructor(props) {
    super(props);
    let carouselData =  {
      current: 0,
      images : props.images,
      speed: props.speed,
      interval: 0
    };
    this.carousel = props.name;
    carouselStore.bootstrap(this.carousel, carouselData);
    this._onChange = this._onChange.bind(this);
    this.autoplay = this.autoplay.bind(this);
  }

  componentDidMount(){
    carouselStore.getState(this.carousel).interval = setInterval(this.autoplay,
      carouselStore.getState(this.carousel).speed);
    carouselStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    carouselStore.removeChangeListener(this._onChange);
  }

  handleClickLeft(){
    clearInterval(carouselStore.getState(this.carousel).interval);
    carouselActions.prevImage(this.carousel);
  }

  handleClickRight(){
    clearInterval(carouselStore.getState(this.carousel).interval);
    carouselActions.nextImage(this.carousel);
  }

  autoplay(){
    carouselActions.nextImage(this.carousel);
  }

  handleSelectImage(index){
    clearInterval(carouselStore.getState(this.carousel).interval);
    carouselActions.selectImage(index, this.carousel);
  }

  handleMouseOver(){
    clearInterval(carouselStore.getState(this.carousel).interval);
  }

  handleMouseOut(autoplay){
    carouselStore.getState(this.carousel).interval = setInterval(autoplay,
      carouselStore.getState(this.carousel).speed);
  }

  _onChange(){
    this.setState({
      carousel: carouselStore.getState(this.carousel)
    });
  }

  render(){
    return (
      <Carousel images={carouselStore.getState(this.carousel).images}
                selected={carouselStore.getState(this.carousel).current}
                onClickLeft={this.handleClickLeft.bind(this)}
                onClickRight={this.handleClickRight.bind(this)}
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this, this.autoplay)}
                onSelectImage={this.handleSelectImage.bind(this)}
                interval={carouselStore.getState(this.carousel).interval}
      />

    )
  }
}
