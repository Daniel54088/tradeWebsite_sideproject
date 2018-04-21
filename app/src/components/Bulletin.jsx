import React from 'react';
import { Carousel } from 'antd';

export default class Bulletin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

      return (
        <div className="bulletin">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                      <Carousel effect="fade" autoplay autoplaySpeed="3000">
                        <p><i className="fas fa-bullhorn fa-2x"></i>2018迎新年，​季排行榜积分奖励调整通知。2018迎新年，​季排行榜积分奖励调整通知。</p>
                        <p><i className="fas fa-bullhorn fa-2x"></i>訊息二</p>
                        <p><i className="fas fa-bullhorn fa-2x"></i>警告安斯</p>
                      </Carousel>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
