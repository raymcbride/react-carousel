import React from 'react';

export class Carousel extends React.Component{

  render() {
    return (
      <div>
        <div className="carousel">
          <ul className="slides">
            {this.props.images.map(function(image, i) {
              var activeClass = i === this.props.selected ? "active" : "inactive";
              return <li key={i}  className={"image " + activeClass}>
                         <img src={image} onMouseOver={this.props.onMouseOver}
                           onMouseOut={this.props.onMouseOut} />
                       </li>;
            }.bind(this))}
          </ul>
          <ul className="controls">
            {this.props.images.map(function(image, i) {
              var activeClass = i === this.props.selected ? "active" : "inactive";
              return <li key={i}
                         className={"circle " + activeClass}
                         onClick={this.onClickDot.bind(this, i)}></li>;
            }.bind(this))}
          </ul>
        <span className="arrow prev"
              onClick={this.props.onClickLeft}>&#9664;</span>
        <span className="arrow next"
              onClick={this.props.onClickRight}>&#9654;</span>
        </div>
      </div>
    )
  }

  onClickDot(index) {
    this.props.onSelectImage(index);
  }

}

Carousel.propTypes = {
  images: React.PropTypes.array.isRequired,
  selected: React.PropTypes.number.isRequired,
  onClickLeft: React.PropTypes.func.isRequired,
  onClickRight: React.PropTypes.func.isRequired,
  onSelectImage: React.PropTypes.func.isRequired,
}
