import React from 'react';
import ReactDOM from 'react-dom';


export default class HistorysItem extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
      let date = new Date(this.props.date);
      let year = date.getFullYear();
      let month = date.getMonth()+1;  //getmonth 0是一月 所以要+1
      let day =  date.getDate();
      let Hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      let status = this.props.state;
      let OrderTracker = this.props.OrderTracker;
      let OrderTrackerUrl = this.props.OrderTrackerUrl;
      let searchText = '';
      if(status == "Approved"){ //字串處理
        status = "已处理";
      }else if(status == "Processing"){
        status = "处理中";
      }else if (status == "Pending") {
          status = "待处理";
      }else{
        status = "取消订单";
      }

      if(!OrderTracker){
        OrderTracker  = '-';
      }

      if(OrderTrackerUrl){
        searchText = "  物流查詢";
      }

      return (
        <tr>
          <td>{this.props.id}</td>
          <td>{year+'/'+month+'/'+day+' '+Hour+':'+minute+':'+second}</td>
          <td>{this.props.name}</td>
          <td>{this.props.quantity}</td>
          <td>{this.props.total}</td>
          <td>{status}</td>
          <td>{OrderTracker}<a href={OrderTrackerUrl} target="_blank">{searchText}</a></td>
        </tr>
        )
    }
}
