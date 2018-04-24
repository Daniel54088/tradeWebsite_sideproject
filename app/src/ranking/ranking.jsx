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
                <div className="col-lg-8 col-sm-10 col-lg-offset-2 col-sm-offset-1">
                  <div className="ranking_wrap">
                    <div className="board list">
                      <div className="titleimg"></div>
                      <Link to={`/rankingreward`} target="_blank" className="btndefault">排行榜奖励规则</Link>
                      <div className="clearfix"></div>
                      <div className="col-xs-12">
                        <Link to={`/ranking/inplay`}>
                          <div className="item">
                            <div className="ranking_title"><img  src={require('../images/main/rocket_img.png')}/>Top Volume</div>
                            <div className="week_rank">
                              200
                              <p>目前週排名</p>
                            </div>
                            <div className="mounth_rank">
                              800
                              <p>目前月排名</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                          </div>
                        </Link>
                        <Link to={`/ranking/fpkgold`}>
                          <div className="item">
                            <div className="ranking_title"><img src={require('../images/main/gold_img.png')}/>Biggest % Gain</div>
                            <div className="week_rank">
                              20
                              <p>目前週排名</p>
                            </div>
                            <div className="mounth_rank">
                              80
                              <p>目前月排名</p>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                          </div>
                        </Link>
                        <Link to={`/ranking/fpksilver`}>
                          <div className="item">
                            <div className="ranking_title"><img  src={require('../images/main/sliver_img.png')}/>Biggest % Loss</div>
                            <div className="week_rank">
                              2
                              <p>目前週排名</p>
                            </div>
                            <div className="mounth_rank">
                              8
                              <p>目前月排名</p>
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
