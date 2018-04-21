import React from 'react';
import {cx} from '../../mutipleClass.js'; //多classname 方法
import { DatePicker } from 'antd';


export default class HistoryList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          startValue: null,
          endValue: null,
          endOpen: false,
        }
        this.disabledStartDate = this.disabledStartDate.bind(this);
        this.disabledEndDate = this.disabledEndDate.bind(this);
        this.onChange  = this.onChange.bind(this);
        this.onStartChange  = this.onStartChange.bind(this);
        this.onEndChange  = this.onEndChange.bind(this);
        this.handleStartToggle = this.handleStartToggle.bind(this);
        this.handleEndToggle = this.handleEndToggle.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }



    disabledStartDate(startValue) { //約束開始和結束日期
      if (!startValue || !this.state.endValue) {
        return false;
      }
      return startValue.getTime() >= this.state.endValue.getTime();
    }

    disabledEndDate(endValue) { //約束開始和結束日期
      if (!endValue || !this.state.startValue) {
        return false;
      }
      return endValue.getTime() <= this.state.startValue.getTime();
    }

    onChange(field, value) {
      this.setState({[field]: value});
    }

    onStartChange(value) {
      this.onChange('startValue', value);
    }

    onEndChange(value) {
      this.onChange('endValue', value);
    }

    handleStartToggle({ open }) {
      if (!open) {
        this.setState({ endOpen: true });
      }
    }

    handleEndToggle({ open }) {
      this.setState({ endOpen: open });
    }

    changeDate(){
    this.props.searchDate(this.props.type,this.state.startValue,this.state.endValue); //從上層傳下來的funciton

    }


    render() {

      let Item;
      if(this.props.type == 'deposit'){
       Item =    <div className="item">
                      <p className="history_date">存款日期</p>
                      <p className="history_code">交易编码</p>
                      <p className="history_amount">存款金额</p>
                      <p className="history_method">存款方式</p>
                      <p className="history_state">到账状态</p>
                </div>;
      }else{
        Item =    <div className="item">
                       <p className="history_date">提款日期</p>
                       <p className="history_code">交易编码</p>
                       <p className="history_amount">提款金额</p>
                       <p className="history_method">提款方式</p>
                       <p className="history_state">到账状态</p>
                 </div>;
      }


    return (
      <div className="deposit_history">
        <div className="wallet_save_input">
          <ul>
              <li>
                <DatePicker
                  disabledDate={this.disabledStartDate}
                  value={this.state.startValue}
                  placeholder="开始日期"
                  onChange={this.onStartChange}
                  toggleOpen={this.handleStartToggle}
                />
              </li>
              <li><i className="fas fa-arrow-right"></i></li>
              <li>
                <DatePicker
                  disabledDate={this.disabledEndDate}
                  value={this.state.endValue}
                  placeholder="结束日期"
                  onChange={this.onEndChange}
                  open={this.state.endOpen}
                  toggleOpen={this.handleEndToggle}
                />
              </li>


              <li>
                  <label className="hero button" htmlFor="lightbox-1" onClick={this.changeDate}>
                      <div className="btnsys" id="window-yo">
                          <p>确认</p>
                      </div>
                  </label>
              </li>
          </ul>
      </div>
      <div className="history_content">
          {Item}
          <ul>
            {this.props.dataArray.map(function(item,index){
              //根據不同狀況做多class判斷帶入
              let StateClass = cx({'history_state': true, 'success': item.StatusId == 2 ,'wait':item.StatusId == 1 , 'fail': item.StatusId == 3});

              return(
                <li key={index}>
                    <p className="history_date">{item.SubmittedAt.substr(0,10)}</p>
                    <p className="history_code">{item.TransactionId}</p>
                    <p className="history_amount">{item.Amount}</p>
                    <p className="history_method">{item.PaymentMethodName}</p>
                    <p className={StateClass}>{item.Status}</p>
                </li>
              );
            }.bind(this))}
          </ul>
      </div>
    </div>
     )
    }
}
