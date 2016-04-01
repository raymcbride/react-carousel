import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel} from '../components/Carousel';
import {carouselStore} from '../stores/carouselStore';
import {carouselActions} from '../actions/carouselActions';

export class CarouselContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      current: props.current,
      images : props.images,
      speed: props.speed,
      interval: props.interval
    };
    this.id = props.id;
    this.onChange = this.onChange.bind(this);
    this.autoplay = this.autoplay.bind(this);
  }

  componentWillMount(){
    carouselActions.initialise(this.state, this.id);
  }

  componentDidMount(){
    carouselActions.setInterval(
      window.setInterval(this.autoplay, this.state.speed), this.id
    );
    carouselStore.addChangeListener(this.onChange);
  }

  componentWillUnmount(){
    carouselStore.removeChangeListener(this.onChange);
  }

  handleClickLeft(){
    window.clearInterval(this.state.interval);
    carouselActions.prevImage(this.id);
  }

  handleClickRight(){
    window.clearInterval(this.state.interval);
    carouselActions.nextImage(this.id);
  }

  autoplay() {
    carouselActions.nextImage(this.id);
  }

  handleSelectImage(index){
    window.clearInterval(this.state.interval);
    carouselActions.selectImage(index, this.id);
  }

  handleMouseOver(){
    window.clearInterval(this.state.interval);
  }

  handleMouseOut(autoplay){
    carouselActions.setInterval(
      window.setInterval(this.autoplay, this.state.speed), this.id
    );
  }

  onChange(){
    this.setState(carouselStore.getState(this.id));
  }

  render(){
    return (
      <Carousel images={this.state.images}
                selected={this.state.current}
                onClickLeft={this.handleClickLeft.bind(this)}
                onClickRight={this.handleClickRight.bind(this)}
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this, this.autoplay)}
                onSelectImage={this.handleSelectImage.bind(this)}
                interval={this.state.interval}
      />

    )
  }
}

CarouselContainer.propTypes = {
   images: React.PropTypes.array.isRequired,
   id: React.PropTypes.string.isRequired,
}

CarouselContainer.defaultProps = {
  current: 0,
  speed: 5000,
  interval: 0
}
