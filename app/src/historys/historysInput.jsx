import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
const RangePicker = DatePicker.RangePicker;
import 'react-datepicker/dist/react-datepicker.css'


export default class HistorysInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          startDate: "",
          endDate:   "",
        };
        this.search = this.search.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

search(){  //搜尋訂單

  let stateOption = this.refs.stateOption.value;
  let date1 = this.state.startDate;
  let date2 = this.state.endDate;

  this.props.searchItem(date1,date2,stateOption); //將搜尋結果傳回父層
}

handleChange(value) { //選取後改變state時間
  this.setState({
    startDate: value[0],endDate:value[1]
  });
}



    render() {
      return (
        <div className="selectdate">
              <p>状态 ：
            <select ref="stateOption" className="selectpicker">
              <option value="0">全部</option>
              <option value="4">待处理</option>
              <option value="5">处理中</option>
              <option value="6">已处理</option>
              <option value="7">拒绝</option>
            </select>
            </p>
            <p>日期区间:</p>
              <RangePicker showTime format="yyyy/MM/dd HH:mm:ss" selected={this.state.startDate}  onChange={this.handleChange} className="hasDatepicker" />

              <a className="btn btn-secondary" onClick={this.search}>搜  寻</a>
        </div>
        )
    }
}
