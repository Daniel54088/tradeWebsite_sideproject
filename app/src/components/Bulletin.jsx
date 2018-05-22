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
                      <Carousel effect="fade" dots="false">
                        <div><i className="fas fa-bullhorn fa-2x" style={{'marginRight':'10px'}}></i>XRP is now on trade.</div>
                        <div><i className="fas fa-bullhorn fa-2x"></i>Gaming Adds ADA/ETH and ADA/BTC Trading Pairs</div>
                        <div><i className="fas fa-bullhorn fa-2x"></i>Gaming Launches Mac Client</div>
                      </Carousel>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
