import React from 'react';
import {Link, browserHistory } from 'react-router';



export default class PromotionItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        let UTF8_title =  this.props.title.replace(/&nbsp;/ig,'');

      return (
        <Link to={`/news/`+this.props.id} target="_blank" >
          <div className="promotion_item">
            <div className="promo_img"><img src={require("../images/news/promotion/promotion_img.jpg")}/></div>
            <div className="moretext">
              <div className="all_text">
                <p>{UTF8_title}</p>
                <span>活動辦法</span>
              </div>
            </div>
          </div>
        </Link>
        )
    }
}
