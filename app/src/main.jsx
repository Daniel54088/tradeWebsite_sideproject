import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');


import './main.css';
import './main_2.css';
import './header_rwd.css';

let user ={};
let wallet ={};
// 配置整体组件
export default class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            wallet:{},

        }
        this.getUserInfo = this.getUserInfo.bind(this);
        this.getUserWallet = this.getUserWallet.bind(this);
        this.setData =   this.setData.bind(this);
    }

    componentDidMount(){
      this.getUserInfo();
      this.getUserWallet();
    }



    getUserInfo(){  //要使用者info
      $.support.cors = true;
      $.ajax({
        method: "GET",
        url:  DomainAPIURL+"api/account/info",
        dataType:'json',
        headers:{
           "UAU" : cookieForAll  //從 cookie.js拿取的 var cookieForAll
        },

        success: function(data){
          console.log(data);
          //通過Token確認後才會開始拿資料
           user = data.data;

        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
          console.log(data);
        },
      }).done(this.setData);

    } //end of getUserInfo


    getUserWallet(){ //要使用者錢包
      $.support.cors = true;
      $.ajax({
        method: "POST",
        url:   DomainAPIURL+"/api/account/wallet",
        dataType:'json',
        headers:{
           "UAU" : cookieForAll
        },

        success: function(data){

          if(!data.status){
              if(data.err_code == '404'){ //剛開始建帳號的人  可以瀏覽
                wallet = {'Point':0};
              }else{
                wallet = {'Point':0};   //登入有誤的人 也可以瀏覽
              }
          }else{
              wallet = data.data;     //登入成功 匯入成功資訊
          }

        }.bind(this), //是個坑  無命名function奧在手動作bind

        error: function(data){
          console.log(data);
          if(data.status == 500){
            wallet = {'Point': '-'}
          }
        },
      }).done(this.setData);

    }

    setData(data){
      this.setState({user:user});
      this.setState({wallet:wallet});
    }




    render() {

      return (
           <div>
                <Header info={this.state.user} searchProduct={this.searchProduct} wallet={this.state.wallet}  />
                <CSSTransitionGroup transitionName='example' transitionEnterTimeout={500} transitionLeaveTimeout={300} >
                <div id="bottomWrap" key={this.props.location.key}>
                    {this.props.children}
                </div>
                </CSSTransitionGroup>
                <Footer />
            </div>
        )
    }
}
