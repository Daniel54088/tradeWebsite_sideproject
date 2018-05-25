import React from 'react';
import {  AreaChart, Area, XAxis, YAxis,  Tooltip } from 'recharts';


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
      console.log(1);

      return (
        <div className="col-md-12 trade-bg">
            <div className="col-md-12 trade-head">

                <div className="col-md-6 col-sm-6 trade-head-left">
                  <h4>{this.props.title}</h4>
                  <h4>Bitcoin</h4>
                </div>

                <div className="col-md-6 col-sm-6 trade-head-right">
                    <h4>$131</h4>
                    <h4>$fewfw</h4>
                </div>

          </div>

          <div className="col-md-12 trade-chart"  ref="test">
            <AreaChart width={this.state.nowWidth} height={(this.state.nowWidth/5.28)} data={data}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey="name"/>

              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>

          </div>




        </div>
        )
    }
}
