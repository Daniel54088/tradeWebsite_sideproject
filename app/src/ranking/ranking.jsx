import React from 'react';
import {Link } from 'react-router';
import './ranking.css';

export default class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {

      return (
        <main>
          <section className="ranking">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-sm-12 ">
                  <div className="ranking_wrap">
                    <div className="board list">

                      <div className="clearfix"></div>
                      <div className="col-xs-12">
                        <Link to={`/ranking/topvolume`}>
                          <div className="item">
                            <div className="ranking_title"><img  src={require('../images/volume.png')}/>Greatest Volume</div>
                            <div className="week_rank">
                              BTC
                              <p>Best of week</p>
                            </div>
                            <div className="mounth_rank">
                              BTC
                              <p>Best of Month</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                          </div>
                        </Link>
                        <Link to={`/ranking/topgain`}>
                          <div className="item">
                            <div className="ranking_title"><img src={require('../images/up.png')}/>Greatest % Gain</div>
                            <div className="week_rank">
                              ETH
                              <p>Best of week</p>
                            </div>
                            <div className="mounth_rank">
                              XRP
                              <p>Best of Month</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                          </div>
                        </Link>
                        <Link to={`/ranking/toploss`}>
                          <div className="item">
                            <div className="ranking_title"><img  src={require('../images/down.png')}/>Greatest % Loss</div>
                            <div className="week_rank">
                              LTC
                              <p>Best of week</p>
                            </div>
                            <div className="mounth_rank">
                              XMR
                              <p>Best of Month</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                          </div>
                        </Link>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </main>
        )
    }
}
