import React from 'react';

import SlideShow from './SlideShow.jsx'
import './slide.css';

let images = [
      {id:1, src:'1.jpg'},
      {id:2, src:'13.png'},

];


export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: images,
            CurrentId: 1,
        }
        this.prev =   this.prev.bind(this);
        this.next =   this.next.bind(this);
    }

    prev(id){
      this.setState({CurrentId:id});
    }

    next(id){
      this.setState({CurrentId:id});
    }

    render() {

      return (
           <div id="myCarousel" className="carousel slide">
                <SlideShow images={this.state.images} CurrentId={this.state.CurrentId} prev={this.prev} next={this.next}/>
            </div>
        )
    }
}
