import React from 'react';
import {  LineChart,AreaChart, Area, XAxis, YAxis,  Tooltip,Line,CartesianGrid } from 'recharts';


const data = [
      {name: 'Page A', uv: 4000},
      {name: 'Page B', uv: 3000},
      {name: 'Page C', uv: 2000},
      {name: 'Page D', uv: 2780},
      {name: 'Page E', uv: 1890},
      {name: 'Page F', uv: 2390},
      {name: 'Page G', uv: 3490},

];


var nowWidth;
export default class TradeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nowWidth:0,
        }

    }

    componentDidMount(){

      this.setState({nowWidth:this.refs.test.offsetWidth});
    }




    render() {
      let dataArray = this.props.dataArray;
      let color = '#8884d8';


      if(this.props.name == 'ETH'){
        color = 'blue';
      }

      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 ">
          <div className="trade-bg">
            <div className="col-md-12 trade-head">

                <div className="col-md-12 col-sm-12 trade-head-left">
                  <h4>{this.props.name} / BTC</h4>
                </div>
            </div>

          <div className="col-md-12 trade-chart"  ref="test">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="Pairprice"> $20</div>
                    </div>

                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="title" >DAY</div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="rate">+0.79%</div>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="title" >Week</div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="rate">+0.79%</div>
                      </div>

                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="title" >Month</div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                          <div className="rate">+0.79%</div>
                      </div>


                </div>

                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <div className="col-lg-1 col-md-1 hidden-sm hidden-xs "><div className="stick"></div></div>

                  <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="key">Open 24H</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="value">23224</div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="key">Open 24H</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="value">23224</div>
                    </div>

                  </div>

                  <div className="col-lg-1 col-md-1 hidden-sm hidden-xs "><div className="stick"></div></div>

                  <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="key">Open 24H</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="value">23224</div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="key">Open 24H</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                      <div className="value">23224</div>
                    </div>

                  </div>

                </div>

              </div>

            <AreaChart width={this.state.nowWidth} height={(this.state.nowWidth/2.8)} data={dataArray}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey="time"/>

              <Tooltip/>
              <Area dot={false} type='monotone' dataKey="open" stroke={color} fillOpacity={1} fill={color} />
            </AreaChart>

          </div>

        </div>


        </div>
        )
    }
}
