import React from 'react';
import { Link } from 'react-router';
import {Spin} from 'antd'; //等待選轉組件
import LiveItem from './LiveItem.jsx';
import './game_class.css';




export default class LiveList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

      return (
        <div className="col-md-4 live_bg">
            <div className="liveing">
                  <div className="Liveing_title"><h3>HOT Cryptocurrency</h3></div>

                <div className="liveing_img"><Link><img src={require("../../../../images/1218324023441.jpg")}/></Link></div>

                <div className="liveing_text">

                <h4>BTC</h4><p className="game_type game_01 clearfix">BTC</p>
                <p className="liveingtext">我是雪晴儿, 陪我一起玩英雄联盟吧  </p>

                </div><div className="news_eye clearfix"><i className="fas fa-eye  fa-1x"></i><p>1231</p></div>
            </div>


            <h4>HOT Pairs</h4>

            <div className="live_list">

              <LiveItem/>
              <LiveItem/>
              <LiveItem/>
              </div>


        </div>
        )
    }
}
