import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Tabs } from 'antd';
import HistoryList from './component/HistoryList.jsx';
import './wallet_history.css'
const TabPane = Tabs.TabPane;

let deposit_array = [];
let withdrawal_array = [];
let sort_array = [];

export default class WalletHistory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          nowPage:this.props.historyCategory ,
          deposit_array : [],
          withdrawal_array : [],
        }
        this.callback = this.callback.bind(this);
        this.getDepositHistory = this.getDepositHistory.bind(this);
        this.getWithdrawalHistory = this.getWithdrawalHistory.bind(this);
        this.searchDate = this.searchDate.bind(this);
    }

    componentDidMount(){
      this.getDepositHistory();
      this.getWithdrawalHistory();
    }

    getDepositHistory(){
      $.ajax({
        method: "GET",
        url: '/src/wallet/deposit_list.json',
        dataType:'json',
        success: function(data){
            this.setState({deposit_array:data.data});
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
        },
      });

    }

    getWithdrawalHistory(){
      $.ajax({
        method: "GET",
        url: '/src/wallet/withdraw_list.json',
        dataType:'json',
        success: function(data){
          this.setState({withdrawal_array:data.data});
        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
        },
      });
    }

    searchDate(type,startDate,endDate){  //這function會傳下去 <HistoryList/>之後會回傳在這邊重新做 ajax

      let startDateFormat = this.DateFormat(startDate);
      let endDateFormat = this.DateFormat(endDate);
      

    }

    DateFormat(WhichDate){
      //時間戳轉換日期
      let date = new Date(WhichDate);
      let Year = date.getFullYear() + '-';
      let Month = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      let Dates = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
      return Year+Month+Dates ;
    }



    componentWillReceiveProps(nextProps) {
      if(nextProps.historyCategory != this.props.historyCategory && nextProps.historyCategory != undefined){ //如果有傳不同的props 就rerender組件，來自上方的下拉式選單
        this.setState({nowPage: nextProps.historyCategory});
        return;
      }

    }

    callback(key){

      //更換tab就重新reload該頁面
      if(key == 1){
        this.setState({nowPage:'1'});
        browserHistory.push('/wallet/history_deposit');
      }else if(key == 2){
        this.setState({nowPage:'2'});
        browserHistory.push('/wallet/history_withdrawal');
      }

    }

    render() {

      return (
        <div className="row wallet">
            <div className="col-md-10 col-md-offset-1">
                <div className="content2 wallet_bg">

                   <Tabs  activeKey={this.state.nowPage}  onChange={this.callback}>

                     <TabPane tab="存款历史" key="1">
                       <h3 className="wallet_save_h3">存款历史</h3>
                       <hr/>
                       <main>
                           <section className="deposit">
                               <div className="leftbox marR">
                                 <HistoryList type='deposit' searchDate={this.searchDate} dataArray={this.state.deposit_array}/>
                               </div>
                           </section>
                       </main>
                        </TabPane>

                        <TabPane tab="提款纪录" key="2">
                          <h3 className="wallet_save_h3">提款纪录</h3>
                          <hr/>
                          <main>
                              <section className="deposit">
                                  <div className="leftbox marR">
                                    <HistoryList type='withdrawal' searchDate={this.searchDate} dataArray={this.state.withdrawal_array}/>
                                  </div>
                              </section>
                          </main>
                           </TabPane>


                      </Tabs>

                        <div className="wallet_service">
                            <h5>如您遇到任何疑问，请您与我们客服部联系哦。</h5>
                            <ul>
                                <i className="far fa-file-alt fa-1x"></i>
                                    <li>
                                        <p>点击<Link to={`/contact`}><u>联繫我们</u></Link>留下信息吧。</p>
                                    </li>
                            </ul>
                            <ul>
                                <li><i className="far fa-envelope fa-1x"></i></li>
                                <li>
                                    <p>电子邮件：<a href="mailto:"><u>cs@ggcarry.com</u></a></p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
