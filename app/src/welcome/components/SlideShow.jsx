import React from 'react';

import Items from './items.jsx';

let inter;//setinterval的變數，在 componentDidMount產生

export default class SlideShow extends React.Component {
    constructor(props) {
        super(props);

    }

    prev(){
      if(this.props.CurrentId > 1){
        this.props.prev(this.props.CurrentId - 1);
      }else{
        this.props.prev(this.props.images.length);
      }
    }

    next(id){
      if(this.props.CurrentId == this.props.images.length){
        this.props.next(1);
      }else{
        this.props.next(this.props.CurrentId + 1);
      }
    }

    componentDidMount() {
       this.inter = setInterval(function(){this.next();}.bind(this), 5000);
    }

    componentWillUnmount(){
        clearInterval(this.inter);

    }
    render() {
      let previous = <img src={require('../../images/previous.png')} onClick={this.prev} />;
      let next = <img src={require('../../images/next.png')} onClick={this.next} />;
      return (
           <div className="carousel-inner">
                <div className="prev">{previous}</div>

                <div className="player">
                  {this.props.images.map(function(item){
                      return(
                        <Items key={item.id}
                          id={item.id}
                          src={item.src}
                          CurrentId={this.props.CurrentId}/>
                      );
                  }.bind(this))}
                </div>

                <div className="next">{next}</div>
            </div>
        )
    }
}
