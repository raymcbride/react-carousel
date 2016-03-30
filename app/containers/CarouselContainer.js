import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from '../components/Carousel';
import {carouselStore} from '../stores/carouselStore';
import {carouselActions} from '../actions/carouselActions';

export class CarouselContainer extends React.Component{

  constructor(props) {
    super(props);

    this.state = {carousel: carouselStore.getState()};
    this.state.carousel.images = props.images;
    this.state.carousel.speed = props.speed;
    this.state.carousel.interval = props.interval;
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    console.log(ReactDOM.findDOMNode(this).attributes);
    carouselStore.getState().interval = setInterval(this.autoplay,
      carouselStore.getState().speed);
    carouselStore.addChangeListener(this._onChange);
  }

  componentWillUnmount(){
    carouselStore.removeChangeListener(this._onChange);
  }

  handleClickLeft(){
    clearInterval(carouselStore.getState().interval);
    carouselActions.prevImage();
  }

  handleClickRight(){
    clearInterval(carouselStore.getState().interval);
    carouselActions.nextImage();
  }

  autoplay(){
    carouselActions.nextImage();
  }

  handleSelectImage(index){
    clearInterval(carouselStore.getState().interval);
    carouselActions.selectImage(index);
  }

  handleMouseOver(){
    clearInterval(carouselStore.getState().interval);
  }

  handleMouseOut(autoplay){
    carouselStore.getState().interval = setInterval(autoplay,
      carouselStore.getState().speed);
  }

  _onChange(){
    this.setState({
      carousel: carouselStore.getState()
    });
  }

  render(){
    return (
      <Carousel images={this.state.carousel.images}
                selected={this.state.carousel.current}
                onClickLeft={this.handleClickLeft}
                onClickRight={this.handleClickRight}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut.bind(this, this.autoplay)}
                onSelectImage={this.handleSelectImage}
                interval={this.state.carousel.interval}
      />

    )
  }
}
