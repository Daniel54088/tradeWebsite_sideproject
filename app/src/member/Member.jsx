import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './member.css';
import Profile from './Profile.jsx';
import History from './History.jsx';
import Balance from './Balance.jsx';
import AccountManagement from './AccountManagement.jsx';
import {Link, browserHistory } from 'react-router';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


window.addEventListener("popstate", function(e){ //監聽如果上下頁要重新ｒｅｌｏａｄ　for tab功能
    location.reload();

});

let whichTab ;
export default class Member extends React.Component {
    constructor(props) {
        super(props);
        switch(this.props.params.type) { //根據進來的domain網址來判斷預設的tab
          case 'balance':
          whichTab= '1';
          break;
          case 'history':
          whichTab= '2';
          break;
          case 'profile':
          whichTab= '3';
          break;
          case 'bank':
          whichTab= '4';
          break;
          default:
          whichTab= '1';
        }

        this.state = {
          nowPage:whichTab ,
        }
        this.callback = this.callback.bind(this);
    }


    callback(key){
      //更換tab就重新reload該頁面
      if(key == 1){
      this.setState({nowPage:'1'});
        browserHistory.push('/member/balance');
      }else if(key == 2){
        this.setState({nowPage:'2'});
        browserHistory.push('/member/history');
      }else if(key == 3){
        this.setState({nowPage:'3'});
        browserHistory.push('/member/profile');
      }else{
        this.setState({nowPage:'4'});
        browserHistory.push('/member/bank');
      }

    }

    render() {
      return (
        <div>
        <Header callback={this.callback}/>
          <main>
            <section className="member">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-sm-12 ">
                    <div className="title_bar">
                      <span>Hi, s981743@gmail.com</span>
                    </div>
                    <Tabs  activeKey={this.state.nowPage}  onChange={this.callback}>
                      <TabPane tab="Balance" key="1"><Balance/></TabPane>
                      <TabPane tab="History" key="2"><History/></TabPane>
                      <TabPane tab="Profile" key="3"><Profile/></TabPane>
                      <TabPane tab="Bank Account" key="4"><AccountManagement/></TabPane>
                    </Tabs>
                 </div>
               </div>
             </div>
          </section>
       </main>

        <Footer/>
        </div>
        )
    }
}
