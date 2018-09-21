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
        <div className="col-md-6">
          <div className="trade-bg">
          <div className="trade-chart"  ref="test">
                  <h4>{this.props.name} / BTC</h4>

                      <div className="Pairprice"> $20</div>
                      <div className="TimeBox">
                          <div className="title" >DAY</div>
                              <div className="rate">+0.79%</div>
                              </div>

                              <div className="TimeBox">
                          <div className="title" >Week</div>
                              <div className="rate">+0.79%</div>
                              </div>


                              <div className="TimeBox">
                          <div className="title" >Month</div>
                            <div className="rate">+0.79%</div>
                          </div>

                    <div className="trade_Box">
                    <div className="KVBoxLeft">
                      <div className="key">Open 24H：</div>
                      <div className="value">23224</div>
                    </div>

                      <div className="KVBoxLeft">
                      <div className="key">Open 24H：</div>
                      <div className="value">23224</div>
                    </div>

                    </div>




                <div className="trade_Box">
                      <div className="KVBoxRight">
                      <div className="key">Open 24H：</div>
                      <div className="value">23224</div>
                    </div>

                      <div className="KVBoxRight">
                      <div className="key">Open 24H：</div>
                      <div className="value">23224</div>
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
