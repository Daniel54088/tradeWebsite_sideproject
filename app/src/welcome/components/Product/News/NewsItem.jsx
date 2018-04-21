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
                <h4>2017-12-7 18:49</h4>
                <p>2018年1月4日德玛西亚杯八强淘汰赛将在青岛国信钻石体育馆开幕。不同于其他参赛队伍需要经过激烈的线上预选赛来争夺八强席位，LPL人气战队IG凭借Nest全国电子竞技大赛冠军身份.........</p>
                <div className="news_eye clearfix"><i className="fas fa-eye  fa-1x"></i>
                    <p>1231</p>
                </div>
            </div>
          <hr/>  
        </div>

        )
    }
}
