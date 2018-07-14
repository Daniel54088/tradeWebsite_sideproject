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
                  <div className="ranking_wrap" id="rank">
                    <div className="board list">

                      <div className="clearfix"></div>

                      <div className="col-md-10 col-md-offset-1">
                        <Link to={`/ranking/topvolume`}>
                          <div className="item itembg1">
                            <div className="ranking_title"><img  src={require('../images/volume.png')}/>Greatest Volume</div>
                          </div>
                        </Link>
                      </div>

                      <div className="col-md-10 col-md-offset-1">
                      <Link to={`/ranking/topgain`}>
                        <div className="item itembg2">
                          <div className="ranking_title"><img src={require('../images/up.png')}/>Greatest % Gain</div>
                        </div>
                      </Link>
                      </div>

                      <div className="col-md-10 col-md-offset-1">
                      <Link to={`/ranking/toploss`}>
                        <div className="item itembg3">
                          <div className="ranking_title"><img  src={require('../images/down.png')}/>Greatest % Loss</div>
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
