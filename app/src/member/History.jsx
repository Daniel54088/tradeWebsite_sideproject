import React from 'react';
import BetItem from './BetItem.jsx';
import { Tabs, DatePicker } from 'antd';
const TabPane = Tabs.TabPane;
const RangePicker = DatePicker.RangePicker;

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowPage: '1',
        }
        this.callback = this.callback.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    callback(key){
      if(key == 1){
        this.setState({nowPage:'1'});
      }else{
        this.setState({nowPage:'2'});
      }
    }

    onChange(value, dateString) {

      console.log('From: ', value[0], ', to: ', value[1]);
      console.log('From: ', dateString[0], ', to: ', dateString[1]);
    }

    render() {

      return (
        <div className="betting_progess">
          <div className="col-sm-12">
            <div className="tab_list">
                <div className="date_search">
                    <RangePicker style={{ width: 184 }} onChange={this.onChange} />
                      </div>
                      <div className="betting_list">
                          <BetItem/>
                          <BetItem/>
                      </div>
                </div>
           </div>
        </div>
        )
    }
}
