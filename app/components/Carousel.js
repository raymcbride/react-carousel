import React from 'react';

export class Carousel extends React.Component{

  render() {
    return (
      <div className="carousel">
        <div className="stage">
          <ul className="slides">
            {this.props.images.map(function(image, i) {
              var activeClass = i === this.props.selected ? "active" : "inactive";
              return <li key={i}  className={"image " + activeClass}>
                         <img src={image} onMouseOver={this.props.onMouseOver}
                           onMouseOut={this.props.onMouseOut} /></li>;
            }.bind(this))}
          </ul>
          <span className="arrow prev"
              onClick={this.props.onClickLeft}>&#9664;</span>
          <span className="arrow next"
              onClick={this.props.onClickRight}>&#9654;</span>
        </div>
          <ul className="controls">
            {this.props.images.map(function(image, i) {
              var activeClass = i === this.props.selected ? "active" : "inactive";
              return <li key={i}
                         className={"circle " + activeClass}
                         onClick={this.onClickCircle.bind(this, i)}></li>;
            }.bind(this))}
          </ul>
      </div>
    )
  }

  onClickCircle(index) {
    this.props.onSelectImage(index);
  }

}

Carousel.propTypes = {
  images: React.PropTypes.array.isRequired,
  selected: React.PropTypes.number.isRequired,
  interval: React.PropTypes.number.isRequired,
  onClickLeft: React.PropTypes.func.isRequired,
  onClickRight: React.PropTypes.func.isRequired,
  onSelectImage: React.PropTypes.func.isRequired,
  onMouseOver: React.PropTypes.func.isRequired,
  onMouseOut: React.PropTypes.func.isRequired,
}

