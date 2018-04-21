import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

      let imgUrl ;    //選出最新上傳的照片
      if(this.props.img.length > 1){
        for (var i = 0; i < this.props.img.length; i++) {
          if(this.props.img[i].IsActive){
            imgUrl = this.props.img[i].AttachmentSource;
          }
        }
      }else{
        imgUrl = this.props.img[0].AttachmentSource;
      }

      return (
        <div className="product">
          <Link to={`/detail/${this.props.id}`}>
            <div className="itemimg"><img src={imgUrl}/></div>
            <div className="itemtext">
              <i className="buyit">兑</i>
              <p>{this.props.name}</p>
              <div className="price">{this.props.cost}</div>
            </div>
          </Link>
        </div>
        )
    }
}
