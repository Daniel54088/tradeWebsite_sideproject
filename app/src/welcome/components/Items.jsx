import React from 'react';
import ReactDOM from 'react-dom';


//根據物件內的true或false來判定要塞入哪個className
function cx(obj){
  return Object.keys(obj).filter(function(key){
    return obj[key];
  }).join(' ');
}



export default class Items extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

      let className = cx({
          'img': true,
          'img-fluid': true,
          'left': this.props.id < this.props.CurrentId,
          'right': this.props.id > this.props.CurrentId
      });


      return (
           <div>
             <img className={className} src={require('../../images/banner/'+this.props.src)}/>
            </div>
        )
    }
}
