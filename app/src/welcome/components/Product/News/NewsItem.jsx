import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';



export default class NewsItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


      return (
        <div className="news_1">
            <div className="news_img_left"><img src={require("../../../../images/1218323476908.jpg")}/></div>
            <div className="news_text_right">
                <h3>{this.props.title}</h3>
                <h4>2018-05-02 12:21:24</h4>
                <p>gergergerge</p>
                <div className="news_eye clearfix"><i className="fas fa-eye  fa-1x"></i>
                    <p>1231</p>
                </div>
            </div>
          <hr/>
        </div>

        )
    }
}
