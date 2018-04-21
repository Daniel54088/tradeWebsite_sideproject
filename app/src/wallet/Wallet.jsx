import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Deposit from './Deposit.jsx';
import Withdrawal from './Withdrawal.jsx';
import CantWithdrawal from './CantWithdrawal.jsx';
import WalletHistory from './WalletHistory.jsx';
import {Link, browserHistory } from 'react-router';
import { Tabs } from 'antd';
import './wallet.css';
const TabPane = Tabs.TabPane;


window.addEventListener("popstate", function(e){ //監聽如果上下頁要重新ｒｅｌｏａｄ　for tab功能
    location.reload();

});

let whichTab ;
let depositCategory;
let historyCategory;
let shouldRunCallBack = true; //走兩種轉換router方式


export default class Wallet extends React.Component {
    constructor(props) {
        super(props);

        //判斷domain近來預設哪個tab 大標題
        if(/^deposit/.test(this.props.params.type)){
            whichTab= '1';
        }else if (/^withdrawal/.test(this.props.params.type)) {
            whichTab= '2';
        }else if (/bonus/.test(this.props.params.type)) {
            whichTab= '3';
        }else if (/^history/.test(this.props.params.type)) {
            whichTab= '4';
        }

        //判斷domain近來預設哪個tab 小標題

        switch (this.props.params.type) {
          case 'deposit_bank':
            depositCategory = '1';
          break;
          case 'deposit_qqpay':
            depositCategory = '2';
          break;
          case 'deposit_localbank':
            depositCategory = '3';
          break;
          case 'deposit_card':
            depositCategory = '4';
          break;
          case 'history_deposit':
            historyCategory ='1';
          break;
          case 'history_withdrawal':
            historyCategory ='2';
          break;
          default:
            depositCategory = '0';
            historyCategory:'0';
        }


        this.state = {
          nowPage:whichTab ,
          depositCategory: depositCategory ,
          historyCategory: historyCategory,
        }
        this.callback = this.callback.bind(this);
        this.onTabClick = this.onTabClick.bind(this);
    }


    callback(key,nextkey){  //如果是一點擊上方menu跟Deposit裡面tab，走此router轉換方式

      if(!shouldRunCallBack){    shouldRunCallBack = true;return;} //如果是點wallet的tab轉換page 就不要再走一次這邊的page轉換
      //更換tab就重新reload該頁面
      if(key == 1){
        this.setState({nowPage:'1'});
        browserHistory.push('/wallet/deposit_bank');
      }else if(key == 2){
        this.setState({nowPage:'2'});
        browserHistory.push('/wallet/withdrawal');
      }else if(key == 3){
        this.setState({nowPage:'3'});
        browserHistory.push('/wallet/bonus');
      }else if(key == 4){
        this.setState({nowPage:'4'});
        browserHistory.push('/wallet/history_deposit');
      }else{
        this.setState({nowPage:'1'});
        browserHistory.push('/wallet/deposit_bank');
      }

        this.setState({depositCategory:nextkey});
    }


    onTabClick(key){   //點 wallet的Tab 會優先走這邊轉換page
      if(key == '1'){
        this.setState({nowPage:'1',depositCategory:'1'});
        browserHistory.push('/wallet/deposit_bank');
        shouldRunCallBack = false;  //設定別再跑一次 callback()
      }else if (key == '4') {
        this.setState({nowPage:'4',historyCategory:'1'});
        browserHistory.push('/wallet/history_deposit');
        shouldRunCallBack = false;  //設定別再跑一次 callback()
      }

    }


    render() {

      return (
        <div>
        <Header callback={this.callback}/>
          <main>
              <div className="content">
                <div className="container-fluid">

                  <div className="wallet row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="title_bar">
                            <span>skylying</span> 的个人钱包
                            <div className="title_bar_money clearfix">
                                <div className="title_bar_1 title_bar_m">
                                    <img  src={require("../images/main/gold_img.png")}/>
                                    <p className="title_bar_1">15,000,000</p>
                                </div>
                                <div className="title_bar_1">
                                    <img src={require("../images/main/sliver_img.png")}/>
                                    <p className="title_bar_1">15,000,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 <div className="row wallet">
                   <div className="col-lg-10 col-sm-12 col-lg-offset-1">
                     <Tabs   activeKey={this.state.nowPage}  onChange={this.callback} onTabClick={this.onTabClick} >
                       <TabPane tab="存款" key="1"><Deposit depositCategory={this.state.depositCategory} /></TabPane>
                       <TabPane tab="提款" key="2"><Withdrawal/></TabPane>
                       <TabPane tab="我的彩金" key="3">123</TabPane>
                       <TabPane tab="存提歷史" key="4"><WalletHistory historyCategory={this.state.historyCategory}/></TabPane>
                     </Tabs>
                </div>
              </div>

            </div>
          </div>
         </main>
       <Footer/>
     </div>
        )
    }
}
